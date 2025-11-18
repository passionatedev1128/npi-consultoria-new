# 🎨 TEMPLATE DE OTIMIZAÇÃO - Next.js Image

Use este template para otimizar rapidamente qualquer componente `<Image>` do Next.js.

---

## 📋 CHECKLIST RÁPIDO

Antes de otimizar, identifique:
- [ ] Onde o componente é usado? (Card, Hero, Thumbnail, etc)
- [ ] Qual o tamanho visual da imagem?
- [ ] É uma imagem "above the fold" (visível sem scroll)?
- [ ] A qualidade precisa ser alta ou pode ser reduzida?

---

## 🔧 PADRÕES POR TIPO DE IMAGEM

### 1️⃣ **CARDS / THUMBNAILS** (mais comum)
**Contexto:** Listagens, grids, carrosséis

```jsx
<Image
  src={imageUrl}
  alt="Descrição"
  fill
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 350px"
  quality={60}
  loading="lazy"
  placeholder="blur"
  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjIzMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzUwIiBoZWlnaHQ9IjIzMyIgZmlsbD0iI2VlZSIvPjwvc3ZnPg=="
  style={{ objectFit: 'cover' }}
  className="..."
/>
```

**Quando usar:**
- ✅ CardImovel
- ✅ CardHome
- ✅ Grids de parceiros
- ✅ Listagens em geral

**Ajuste o `sizes` conforme largura real do card:**
```jsx
// Card pequeno (~280px)
sizes="(max-width: 640px) 100vw, 280px"

// Card médio (~350px) 
sizes="(max-width: 640px) 100vw, 350px"

// Card grande (~500px)
sizes="(max-width: 640px) 100vw, 500px"
```

---

### 2️⃣ **HERO / BANNER** (topo da página)
**Contexto:** Imagens grandes, primeira impressão

```jsx
<Image
  src={heroUrl}
  alt="Hero Banner"
  fill
  sizes="100vw"
  quality={80}
  priority
  placeholder="blur"
  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSI4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjE5MjAiIGhlaWdodD0iODAwIiBmaWxsPSIjZWVlIi8+PC9zdmc+"
  style={{ objectFit: 'cover' }}
  className="..."
/>
```

**Quando usar:**
- ✅ Banner topo da home
- ✅ Hero de páginas institucionais
- ✅ Primeira imagem acima da dobra

**⚠️ ATENÇÃO:**
- Use `priority` (não usa lazy loading)
- Quality mais alta (80%)
- `sizes="100vw"` (ocupa tela toda)

---

### 3️⃣ **LOGOS / ÍCONES**
**Contexto:** Pequenos, alta compressão

```jsx
<Image
  src={logoUrl}
  alt="Logo"
  width={120}
  height={40}
  quality={70}
  loading="lazy"
  className="..."
/>
```

**Quando usar:**
- ✅ Logo da empresa
- ✅ Logos de parceiros
- ✅ Ícones ilustrativos

**Dica:** Use width/height fixos (não `fill`)

---

### 4️⃣ **GALERIA / MODAL** (imagem expandida)
**Contexto:** Visualização ampliada, qualidade alta

```jsx
<Image
  src={galleryUrl}
  alt="Imagem Galeria"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
  quality={80}
  loading="lazy"
  placeholder="blur"
  blurDataURL="..."
  style={{ objectFit: 'contain' }}
  className="..."
/>
```

**Quando usar:**
- ✅ ImageGallery
- ✅ Modais de imagem
- ✅ Tour Virtual placeholder

**Diferenças:**
- `objectFit: 'contain'` (não corta imagem)
- Quality 80% (visualização ampliada)
- `sizes` maior (até 1200px)

---

### 5️⃣ **AVATAR / PERFIL**
**Contexto:** Circular, pequeno

```jsx
<Image
  src={avatarUrl}
  alt="Avatar"
  width={48}
  height={48}
  quality={65}
  loading="lazy"
  className="rounded-full"
/>
```

**Quando usar:**
- ✅ Foto de corretor
- ✅ Foto de depoimento
- ✅ Avatar de usuário

---

## 🎯 GUIA DE `quality`

| Contexto | Quality | Economia | Visual |
|----------|---------|----------|--------|
| **Thumbnails** | 55-60 | ~45% | Ótimo |
| **Cards** | 60-65 | ~40% | Excelente |
| **Destaque** | 70-75 | ~30% | Perfeito |
| **Hero/Banner** | 75-80 | ~20% | Premium |
| **Galeria Full** | 80-85 | ~15% | Máximo |

---

## 📏 GUIA DE `sizes`

### Fórmula Básica
```
sizes="(breakpoint) largura, fallback"
```

### Exemplos Práticos

**Grid Responsivo (3 colunas → 2 → 1):**
```jsx
sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
```

**Sidebar (300px fixo em desktop):**
```jsx
sizes="(max-width: 768px) 100vw, 300px"
```

**Container limitado (max 1200px):**
```jsx
sizes="(max-width: 640px) 100vw, (max-width: 1200px) 80vw, 1200px"
```

**Full width sempre:**
```jsx
sizes="100vw"
```

---

## 🎨 GERANDO blurDataURL

### Opção 1: SVG Inline (Recomendado)
```jsx
blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iWCIgaGVpZ2h0PSJZIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSJYIiBoZWlnaHQ9IlkiIGZpbGw9IiNlZWUiLz48L3N2Zz4="
```

**Substitua X e Y pelas dimensões do container:**
```jsx
// Card 350x233
blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjIzMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzUwIiBoZWlnaHQ9IjIzMyIgZmlsbD0iI2VlZSIvPjwvc3ZnPg=="

// Banner 1920x800
blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSI4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjE5MjAiIGhlaWdodD0iODAwIiBmaWxsPSIjZWVlIi8+PC9zdmc+"
```

### Opção 2: Gerador Online
1. Acesse: https://png-pixel.com/
2. Escolha cor cinza (#eeeeee)
3. Dimensão: 10x10px
4. Download → Converter para base64
5. Cole no `blurDataURL`

### Opção 3: Omitir (se não for crítico)
```jsx
// Sem placeholder
<Image ... />
```

---

## ⚡ PADRÃO DE MIGRAÇÃO

### ANTES (Código antigo típico)
```jsx
<Image
  src={url}
  alt="Texto"
  layout="fill"
  objectFit="cover"
/>
```

### DEPOIS (Código otimizado)
```jsx
<Image
  src={url}
  alt="Texto"
  fill
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 350px"
  quality={60}
  loading="lazy"
  placeholder="blur"
  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjIzMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzUwIiBoZWlnaHQ9IjIzMyIgZmlsbD0iI2VlZSIvPjwvc3ZnPg=="
  style={{ objectFit: 'cover' }}
  className="..."
/>
```

**Mudanças:**
1. ✅ `layout="fill"` → `fill`
2. ✅ `objectFit="cover"` → `style={{ objectFit: 'cover' }}`
3. ✅ Adicionar `sizes` (crítico!)
4. ✅ Adicionar `quality`
5. ✅ Adicionar `loading="lazy"` (ou `priority` se hero)
6. ✅ Adicionar `placeholder="blur"` + `blurDataURL`

---

## 🧪 VALIDAÇÃO

Após otimizar, verificar:

```bash
# Executar análise automática
node scripts/check-image-optimization.js
```

Verificar no código:
- [ ] ✅ Tem `sizes`
- [ ] ✅ Tem `quality`
- [ ] ✅ Tem `loading` (lazy ou priority)
- [ ] ✅ `objectFit` está em `style={{}}` (não como prop)

---

## 📊 IMPACTO ESTIMADO POR COMPONENTE

| Componente | Uso | Economia Mensal |
|------------|-----|-----------------|
| CardImovel | Listagens | ~$25 |
| CardHome | Homepage | ~$8 |
| Header | Todas páginas | ~$5 |
| Slide Partners | Múltiplas páginas | ~$3 |
| Outros | Diversos | ~$2 cada |

---

## 🚨 ERROS COMUNS

### ❌ Erro 1: Esquecer `sizes`
```jsx
// ERRADO - Gera 14 variações
<Image src={url} fill quality={60} />
```

```jsx
// CORRETO
<Image src={url} fill sizes="..." quality={60} />
```

### ❌ Erro 2: `priority` em tudo
```jsx
// ERRADO - Carrega tudo de uma vez
<Image priority />
```

```jsx
// CORRETO - Só na primeira imagem visível
<Image loading="lazy" />
```

### ❌ Erro 3: Quality muito baixo
```jsx
// ERRADO - Imagem pixelada
<Image quality={30} />
```

```jsx
// CORRETO - Balanceado
<Image quality={60} /> // Cards
<Image quality={80} /> // Hero
```

---

## 🎓 EXEMPLO COMPLETO

Ver implementação real em:
- ✅ `src/app/components/ui/card-imovel.js`
- ✅ `src/app/components/ui/card-home.js`
- ✅ `src/app/imovel/[id]/[slug]/componentes/TourVirtual.js`

---

**Última atualização:** 21/10/2025
