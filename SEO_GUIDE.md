# 📊 Guia de SEO - SG Digital

Este documento descreve as melhorias de SEO implementadas e como mantê-las atualizado.

## ✅ Melhorias Implementadas

### 1. **Meta Tags Avançadas**
- ✓ Title e description otimizados para CTR
- ✓ Keywords relevantes para o negócio
- ✓ Robots meta tag (`index, follow, max-image-preview:large`)
- ✓ Viewport responsivo
- ✓ Canonical URL
- ✓ Alternate links para diferentes locales (pt-BR, pt-AO)

### 2. **Open Graph & Twitter Cards**
- ✓ Imagens otimizadas (1200x630px)
- ✓ URLs absolutas em vez de relativas
- ✓ Tipo de conteúdo correto ("website")
- ✓ Informações estruturadas para redes sociais

### 3. **JSON-LD Schema.org**
- ✓ **LocalBusiness**: Identifica o negócio com localização, contacto e serviços
- ✓ **Organization**: Estrutura da empresa, redes sociais e contacto
- ✓ Pronto para **BreadcrumbList** em páginas internas
- ✓ Pronto para **Service** schema em páginas de serviços

### 4. **Performance SEO**
- ✓ DNS Prefetch para Google Analytics e GTM
- ✓ Preconnect para Google Fonts
- ✓ Minificação de JSON-LD (automática)

### 5. **Acessibilidade & Mobile**
- ✓ Viewport correto para mobile
- ✓ Maximum-scale=5 para evitar zoom excessivo
- ✓ Overflow-x-hidden para prevenir scroll lateral

---

## 🔧 Como Personalizar o SEO

### Atualizar Informações Básicas
Edite `lib/seo-config.ts`:

```typescript
export const SEO_CONFIG = {
  siteUrl: "https://sgdigital.ao", // seu domínio
  phone: "+244951077107",            // seu telefone
  email: "info@sgdigital.ao",        // seu email
  address: {
    streetAddress: "Luanda",
    city: "Luanda",
    country: "AO",
  },
  social: {
    facebook: "https://www.facebook.com/sgdigital",
    instagram: "https://www.instagram.com/sgdigital",
    // ... adicione suas redes sociais
  },
}
```

### Adicionar Google Analytics
Em `app/layout.tsx`, procure `verification.google` e substitua `seu-google-verification-code` pelo seu código.

### Usar Schema em Páginas Internas
Exemplo para página de serviço (`app/servicos/[id]/page.tsx`):

```tsx
import { generateServiceSchema, SEO_CONFIG } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: "Desenvolvimento Web - SG Digital",
  description: "...",
}

export default function ServicePage({ params }) {
  const schema = generateServiceSchema({
    name: "Desenvolvimento Web",
    description: "...",
    image: "/web-development.jpg",
    url: `/servicos/${params.id}`,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* conteúdo da página */}
    </>
  )
}
```

---

## 📋 Checklist para Manutenção SEO

- [ ] **Títulos**: Cada página tem título único (<60 caracteres) com palavra-chave
- [ ] **Descrições**: Cada página tem meta description (<160 caracteres)
- [ ] **Imagens**: Têm alt text descritivo e nomes de ficheiro em inglês
- [ ] **Links internos**: Mantêm estrutura de navegação clara
- [ ] **Links externos**: Usam `rel="noopener noreferrer"` quando aplicável
- [ ] **Headings**: H1 é único por página, hierarquia H1→H2→H3 respeita ordem
- [ ] **Mobile**: Site responsivo, testa em 320px, 768px, 1024px
- [ ] **Performance**: Lighthouse > 90 (Speed, SEO, Accessibility)
- [ ] **Schema.org**: Validar em https://schema.org/validator
- [ ] **Google Search Console**: Submeter sitemap.xml

---

## 🚀 Próximas Melhorias Recomendadas

### 1. **Sitemap & Robots.txt**
```bash
# /public/sitemap.xml
# /public/robots.txt
```

### 2. **FAQ Schema** (se aplicável)
Para página de FAQ ou contact:
```tsx
generateFAQSchema([
  { question: "...", answer: "..." },
])
```

### 3. **Rich Snippets de Avaliações**
Se tiver depoimentos/reviews:
```tsx
generateAggregateRatingSchema({
  ratingValue: 4.8,
  reviewCount: 25,
})
```

### 4. **Google Business Profile**
Vincular ao Google My Business com as coordenadas de Luanda.

### 5. **Blog/News Schema**
Se adicionar um blog, use `NewsArticle` ou `BlogPosting` schema.

---

## 🔍 Ferramentas para Verificar SEO

- **Google Search Console**: https://search.google.com/search-console
- **Google PageSpeed Insights**: https://pagespeed.web.dev
- **Schema.org Validator**: https://schema.org/validator
- **Lighthouse (Chrome DevTools)**: F12 → Lighthouse
- **Screaming Frog SEO Spider** (gratuito até 500 URLs)
- **SEMrush** ou **Ahrefs** (ferramentas premium)

---

## 📝 Padrões de Nomenclatura para SEO

### Nomes de Ficheiros
- ✓ `web-development.jpg` (em vez de `img1.jpg`)
- ✓ `hero-banner-home.png`
- ✓ `testimonial-client-01.jpg`

### Slugs de URL
- ✓ `/servicos/desenvolvimento-web` (em vez de `/service/web-dev`)
- ✓ `/blog/guia-marketing-digital` (em vez de `/post123`)

### Alt Text de Imagens
```jsx
<img src="web-dev.jpg" alt="Desenvolvimento Web Profissional em Angola" />
```

---

## 🎯 Métricas SEO para Acompanhar

| Métrica | Alvo | Ferramenta |
|---------|------|-----------|
| **Core Web Vitals** | LCP <2.5s, FID <100ms, CLS <0.1 | PageSpeed Insights |
| **Lighthouse SEO** | ≥90 | Chrome DevTools |
| **Sessões Orgânicas** | +20% ao mês | Google Analytics 4 |
| **Posição Média** | Top 10 para keywords principais | Google Search Console |
| **CTR Média** | ≥2.5% | Google Search Console |

---

## 📞 Contacto para Dúvidas SEO

Para questões específicas sobre SEO, contacte o seu desenvolvedor ou consulte a documentação oficial:
- https://developers.google.com/search
- https://schema.org
- https://web.dev/lighthouse

---

**Última atualização**: 3 de janeiro de 2026  
**Versão**: 1.0
