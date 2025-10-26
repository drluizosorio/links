'use client'

import { lazy, Suspense } from 'react'
import { Card, CardContent } from '@/components/ui/card'

// Lazy load heavy components
export const LazyBlogSearch = lazy(() => import('@/components/blog/blog-search'))
export const LazyBlogCategories = lazy(() => import('@/components/blog/blog-categories'))
export const LazyBlogTags = lazy(() => import('@/components/blog/blog-tags'))
export const LazyMediaGallery = lazy(() => import('@/components/media/media-gallery'))
export const LazyMediaManager = lazy(() => import('@/components/media/media-manager'))
export const LazyHeroSection = lazy(() => import('@/components/ui/hero-section'))

// Loading fallback components
export const BlogSearchSkeleton = () => (
  <Card className="w-full">
    <CardContent className="p-6">
      <div className="space-y-4">
        <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        <div className="flex gap-2">
          <div className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="h-8 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>
      </div>
    </CardContent>
  </Card>
)

export const BlogCategoriesSkeleton = () => (
  <div className="flex flex-wrap gap-2">
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
    ))}
  </div>
)

export const BlogTagsSkeleton = () => (
  <div className="flex flex-wrap gap-2">
    {Array.from({ length: 8 }).map((_, i) => (
      <div key={i} className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
    ))}
  </div>
)

export const MediaGallerySkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {Array.from({ length: 6 }).map((_, i) => (
      <Card key={i} className="overflow-hidden">
        <div className="aspect-video bg-gray-200 dark:bg-gray-700 animate-pulse" />
        <CardContent className="p-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2" />
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-2/3" />
        </CardContent>
      </Card>
    ))}
  </div>
)

export const HeroSectionSkeleton = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
    <div className="container mx-auto px-4 py-20">
      <div className="text-center space-y-6">
        <div className="h-16 bg-gray-300 dark:bg-gray-600 rounded animate-pulse mx-auto max-w-2xl" />
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded animate-pulse mx-auto max-w-xl" />
        <div className="h-12 bg-gray-300 dark:bg-gray-600 rounded animate-pulse mx-auto w-48" />
      </div>
    </div>
  </div>
)

// Wrapper components with Suspense
export const LazyBlogSearchWithSuspense = (props: any) => (
  <Suspense fallback={<BlogSearchSkeleton />}>
    <LazyBlogSearch {...props} />
  </Suspense>
)

export const LazyBlogCategoriesWithSuspense = (props: any) => (
  <Suspense fallback={<BlogCategoriesSkeleton />}>
    <LazyBlogCategories {...props} />
  </Suspense>
)

export const LazyBlogTagsWithSuspense = (props: any) => (
  <Suspense fallback={<BlogTagsSkeleton />}>
    <LazyBlogTags {...props} />
  </Suspense>
)

export const LazyMediaGalleryWithSuspense = (props: any) => (
  <Suspense fallback={<MediaGallerySkeleton />}>
    <LazyMediaGallery {...props} />
  </Suspense>
)

export const LazyHeroSectionWithSuspense = (props: any) => (
  <Suspense fallback={<HeroSectionSkeleton />}>
    <LazyHeroSection {...props} />
  </Suspense>
)