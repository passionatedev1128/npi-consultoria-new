import AdminClientLayout from "./AdminClientLayout";

// Disable static generation for all admin pages
export const dynamic = 'force-dynamic';

// CORREÇÃO: Metadata com noindex para admin
export const metadata = {
  title: "Admin - NPi Consultoria",
  description: "Área administrativa - NPi Consultoria",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({ children }) {
  return <AdminClientLayout>{children}</AdminClientLayout>;
}
