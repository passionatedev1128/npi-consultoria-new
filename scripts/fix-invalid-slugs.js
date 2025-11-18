#!/usr/bin/env node
/**
 * Fix Invalid Slugs Script
 * 
 * This script finds and fixes properties with invalid slugs that cause:
 * - 404 errors
 * - Redirect chains
 * - SEO issues
 * 
 * Run: node scripts/fix-invalid-slugs.js
 */

import { MongoClient } from 'mongodb';
import 'dotenv/config';

// Invalid slug patterns to fix
const INVALID_SLUG_PATTERNS = [
    'facebook.com/npiimoveis',
    'instagram.com/npi_imoveis',
    'linkedin.com/company/npi',
    'twitter.com/npi',
    'youtube.com/npi',
    'indexdata/index.swf',
    'iframe.php',
    'iConatusIframe',
];

const INVALID_KEYWORDS = [
    'facebook.com',
    'instagram.com',
    'linkedin.com',
    'twitter.com',
    'youtube.com',
    '.swf',
    '.php',
    'iframe',
    'http://',
    'https://',
];

/**
 * Generate a valid slug from property name
 */
function generateSlug(empreendimento, bairro, cidade) {
    let slug = empreendimento || 'imovel';
    
    // Add location context if available
    if (bairro && !slug.toLowerCase().includes(bairro.toLowerCase())) {
        slug += ` ${bairro}`;
    }
    if (cidade && !slug.toLowerCase().includes(cidade.toLowerCase())) {
        slug += ` ${cidade}`;
    }
    
    // Clean and format
    slug = slug
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove accents
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
        .trim()
        .replace(/\s+/g, '-') // Spaces to hyphens
        .replace(/-+/g, '-') // Multiple hyphens to single
        .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
    
    return slug || 'imovel';
}

/**
 * Check if slug is invalid
 */
function isInvalidSlug(slug) {
    if (!slug || typeof slug !== 'string') {
        return true;
    }
    
    // Check exact patterns
    if (INVALID_SLUG_PATTERNS.includes(slug.toLowerCase())) {
        return true;
    }
    
    // Check for invalid keywords
    return INVALID_KEYWORDS.some(keyword => 
        slug.toLowerCase().includes(keyword)
    );
}

/**
 * Main function
 */
async function fixInvalidSlugs() {
    console.log('Starting Invalid Slug Fix Script...\n');
    
    // Check environment
    if (!process.env.MONGODB_URI) {
        console.error('ERROR: MONGODB_URI not found in environment variables');
        console.error('Please create a .env file with your MongoDB connection string:');
        console.error('MONGODB_URI=mongodb://username:password@host:port/database');
        process.exit(1);
    }
    
    const client = new MongoClient(process.env.MONGODB_URI);
    
    try {
        // Connect to database
        console.log('Connecting to database...');
        await client.connect();
        console.log('Connected to database\n');
        
        const db = client.db();
        const collection = db.collection('imoveis'); // Adjust collection name if needed
        
        // Find ALL properties to check slugs
        console.log('Scanning all properties for invalid slugs...');
        const allProperties = await collection.find({}).toArray();
        console.log(`Found ${allProperties.length} total properties\n`);
        
        const problematicProperties = allProperties.filter(property => 
            isInvalidSlug(property.Slug)
        );
        
        console.log(` Found ${problematicProperties.length} properties with invalid slugs\n`);
        
        if (problematicProperties.length === 0) {
            console.log('No invalid slugs found! Your database is clean.');
            return;
        }
        
        // Show preview
        console.log('Preview of fixes (first 10):');
        console.log('━'.repeat(80));
        problematicProperties.slice(0, 10).forEach((property, index) => {
            const newSlug = generateSlug(
                property.Empreendimento,
                property.BairroComercial || property.Bairro,
                property.Cidade
            );
            console.log(`${index + 1}. [${property.Codigo}] ${property.Empreendimento}`);
            console.log(`   Old: "${property.Slug || '(empty)'}"`);
            console.log(`   New: "${newSlug}"`);
            console.log('');
        });
        
        if (problematicProperties.length > 10) {
            console.log(`   ... and ${problematicProperties.length - 10} more\n`);
        }
        
        console.log('━'.repeat(80));
        
        // Confirm before proceeding
        console.log('\n WARNING: This will update slugs in your database!');
        console.log('Press Ctrl+C to cancel, or press Enter to continue...');
        
        // In production, you might want to require manual confirmation
        // For now, we'll add a 5 second delay
        console.log('Starting in 5 seconds...');
        await new Promise(resolve => setTimeout(resolve, 5000));
        
        // Fix each property
        console.log('\nFixing slugs...\n');
        let successCount = 0;
        let errorCount = 0;
        
        for (const property of problematicProperties) {
            try {
                const newSlug = generateSlug(
                    property.Empreendimento,
                    property.BairroComercial || property.Bairro,
                    property.Cidade
                );
                
                await collection.updateOne(
                    { _id: property._id },
                    { 
                        $set: { 
                            Slug: newSlug,
                            SlugUpdatedAt: new Date(),
                            SlugUpdatedBy: 'fix-invalid-slugs-script'
                        } 
                    }
                );
                
                successCount++;
                console.log(`[${property.Codigo}] ${property.Empreendimento}`);
                console.log(`   "${property.Slug}" → "${newSlug}"`);
                
            } catch (error) {
                errorCount++;
                console.error(`[${property.Codigo}] Error: ${error.message}`);
            }
        }
        
        // Summary
        console.log('\n' + '━'.repeat(80));
        console.log('SUMMARY');
        console.log('━'.repeat(80));
        console.log(`Successfully fixed: ${successCount} properties`);
        console.log(`Errors: ${errorCount} properties`);
        console.log(`Success rate: ${((successCount / problematicProperties.length) * 100).toFixed(1)}%`);
        console.log('━'.repeat(80));
        
        if (successCount > 0) {
            console.log('\nSlug fixes complete!');
            console.log('\nNext steps:');
            console.log('1. Regenerate your sitemap: Visit /api/revalidate?secret=YOUR_SECRET');
            console.log('2. Submit sitemap to Google Search Console');
            console.log('3. Request re-indexing of fixed URLs');
            console.log('4. Monitor Google Search Console for improvements');
        }
        
    } catch (error) {
        console.error('\nERROR:', error.message);
        console.error(error.stack);
        process.exit(1);
    } finally {
        await client.close();
        console.log('\nDatabase connection closed');
    }
}

// Run the script
fixInvalidSlugs().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});

