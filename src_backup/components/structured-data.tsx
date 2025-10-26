'use client'

interface StructuredDataProps {
  type: 'person' | 'article' | 'organization' | 'website'
  data: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const generateSchema = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
    }

    switch (type) {
      case 'person':
        return {
          ...baseSchema,
          '@type': 'Person',
          name: data.name,
          jobTitle: data.jobTitle,
          description: data.description,
          url: data.url,
          image: data.image,
          sameAs: data.sameAs || [],
          knowsAbout: data.knowsAbout || [],
          alumniOf: data.alumniOf || [],
          worksFor: {
            '@type': 'Organization',
            name: data.organization,
          },
        }

      case 'article':
        return {
          ...baseSchema,
          '@type': 'Article',
          headline: data.title,
          description: data.description,
          image: data.image,
          author: {
            '@type': 'Person',
            name: data.author,
          },
          publisher: {
            '@type': 'Organization',
            name: 'Dr. Luiz Osório',
            logo: {
              '@type': 'ImageObject',
              url: data.publisherLogo,
            },
          },
          datePublished: data.datePublished,
          dateModified: data.dateModified,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': data.url,
          },
        }

      case 'organization':
        return {
          ...baseSchema,
          '@type': 'Organization',
          name: data.name,
          description: data.description,
          url: data.url,
          logo: data.logo,
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: data.telephone,
            contactType: 'customer service',
          },
          sameAs: data.sameAs || [],
        }

      case 'website':
        return {
          ...baseSchema,
          '@type': 'WebSite',
          name: data.name,
          description: data.description,
          url: data.url,
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${data.url}/search?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
          },
        }

      default:
        return baseSchema
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateSchema()),
      }}
    />
  )
}

// Dados estruturados específicos para Dr. Luiz Osório
export const drLuizPersonSchema = {
  name: 'Dr. Luiz Eduardo de Moraes Vivas Osório',
  jobTitle: 'Médico Nutrólogo e Medicina Esportiva',
  description: 'Médico especialista em Nutrologia e Medicina Esportiva, focado em medicina centrada na pessoa, emagrecimento, hipertrofia, performance e longevidade.',
  url: 'https://drluizosorio.com.br',
  image: 'https://drluizosorio.com.br/dr-luiz.jpg',
  organization: 'CAIS - Centro de Atenção Integral à Saúde',
  sameAs: [
    'https://instagram.com/drluizosorio',
    'https://linkedin.com/in/drluizosorio',
    'https://youtube.com/@drluizosorio',
  ],
  knowsAbout: [
    'Nutrologia',
    'Medicina Esportiva',
    'Emagrecimento',
    'Hipertrofia',
    'Performance',
    'Longevidade',
    'Filosofia Estoica',
    'Medicina Centrada na Pessoa',
  ],
}

export const websiteSchema = {
  name: 'Dr. Luiz Osório - Medicina e Filosofia',
  description: 'Medicina centrada na pessoa + evidências + filosofia. Conteúdos sobre emagrecimento, hipertrofia, performance e longevidade.',
  url: 'https://drluizosorio.com.br',
}