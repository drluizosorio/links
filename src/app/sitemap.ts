import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://drluizosorio.com'
  
  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/media`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/nutella`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/sai-da-bobolandia`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ]

  // Dynamic blog post routes
  const blogPosts = [
    {
      id: 1,
      slug: 'beneficios-medicina-preventiva',
      publishedAt: '2024-01-15',
    },
    {
      id: 2,
      slug: 'importancia-exercicios-regulares',
      publishedAt: '2024-01-10',
    },
    {
      id: 3,
      slug: 'alimentacao-saudavel-longevidade',
      publishedAt: '2024-01-05',
    },
    {
      id: 4,
      slug: 'saude-mental-bem-estar',
      publishedAt: '2024-01-01',
    },
  ]

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogRoutes]
}