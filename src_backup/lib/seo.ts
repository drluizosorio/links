import { Metadata } from 'next'

// Base SEO configuration
export const baseSEO = {
  siteName: 'Dr. Luiz Osório',
  siteUrl: 'https://drluizosorio.com',
  defaultTitle: 'Dr. Luiz Osório - Médico Especialista em Saúde e Bem-estar',
  defaultDescription: 'Médico especialista em saúde preventiva, bem-estar e qualidade de vida. Conteúdo educativo sobre medicina, nutrição e estilo de vida saudável.',
  defaultKeywords: ['médico', 'saúde', 'bem-estar', 'medicina preventiva', 'nutrição', 'qualidade de vida'],
  author: 'Dr. Luiz Osório',
  language: 'pt-BR',
  locale: 'pt_BR',
}

// Generate dynamic metadata for pages
export function generatePageMetadata({
  title,
  description,
  keywords = [],
  image,
  path = '',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = baseSEO.author,
}: {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  path?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
}): Metadata {
  const fullTitle = title ? `${title} | ${baseSEO.siteName}` : baseSEO.defaultTitle
  const fullDescription = description || baseSEO.defaultDescription
  const fullKeywords = [...baseSEO.defaultKeywords, ...keywords]
  const fullUrl = `${baseSEO.siteUrl}${path}`
  const fullImage = image || `${baseSEO.siteUrl}/og-image.jpg`

  const metadata: Metadata = {
    title: fullTitle,
    description: fullDescription,
    keywords: fullKeywords.join(', '),
    authors: [{ name: author }],
    creator: author,
    publisher: baseSEO.siteName,
    
    // Open Graph
    openGraph: {
      type,
      locale: baseSEO.locale,
      url: fullUrl,
      siteName: baseSEO.siteName,
      title: fullTitle,
      description: fullDescription,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: [author],
      }),
    },

    // Twitter
    twitter: {
      card: 'summary_large_image',
      site: '@drluizosorio',
      creator: '@drluizosorio',
      title: fullTitle,
      description: fullDescription,
      images: [fullImage],
    },

    // Additional meta tags
    alternates: {
      canonical: fullUrl,
    },
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }

  return metadata
}

// Generate blog post metadata
export function generateBlogMetadata({
  title,
  excerpt,
  category,
  tags = [],
  publishedAt,
  readTime,
  slug,
}: {
  title: string
  excerpt: string
  category: string
  tags?: string[]
  publishedAt: string
  readTime: string
  slug: string
}): Metadata {
  const keywords = [category, ...tags, 'blog', 'artigo médico']
  
  return generatePageMetadata({
    title,
    description: excerpt,
    keywords,
    path: `/blog/${slug}`,
    type: 'article',
    publishedTime: publishedAt,
    modifiedTime: publishedAt,
  })
}

// Generate structured data for articles
export function generateArticleStructuredData({
  title,
  excerpt,
  publishedAt,
  modifiedAt,
  author = baseSEO.author,
  category,
  tags = [],
  slug,
  readTime,
}: {
  title: string
  excerpt: string
  publishedAt: string
  modifiedAt?: string
  author?: string
  category: string
  tags?: string[]
  slug: string
  readTime: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: excerpt,
    author: {
      '@type': 'Person',
      name: author,
      url: baseSEO.siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: baseSEO.siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${baseSEO.siteUrl}/logo.png`,
      },
    },
    datePublished: publishedAt,
    dateModified: modifiedAt || publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseSEO.siteUrl}/blog/${slug}`,
    },
    articleSection: category,
    keywords: tags.join(', '),
    timeRequired: readTime,
    inLanguage: baseSEO.language,
  }
}

// Generate breadcrumb structured data
export function generateBreadcrumbStructuredData(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// Generate FAQ structured data
export function generateFAQStructuredData(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Generate organization structured data
export function generateOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: baseSEO.siteName,
    url: baseSEO.siteUrl,
    logo: `${baseSEO.siteUrl}/logo.png`,
    description: baseSEO.defaultDescription,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR',
      addressLocality: 'Brasil',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'Portuguese',
    },
    sameAs: [
      'https://instagram.com/drluizosorio',
      'https://linkedin.com/in/drluizosorio',
      'https://youtube.com/@drluizosorio',
    ],
  }
}

// SEO utility functions
export function generateCanonicalUrl(path: string): string {
  return `${baseSEO.siteUrl}${path}`
}

export function generateImageUrl(imagePath: string): string {
  if (imagePath.startsWith('http')) return imagePath
  return `${baseSEO.siteUrl}${imagePath}`
}

export function truncateDescription(text: string, maxLength: number = 160): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength - 3) + '...'
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim()
}