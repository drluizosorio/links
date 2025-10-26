import { Metadata } from 'next'
import { LazyMediaManager } from '@/components/lazy-components'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Gerenciamento de Mídia | Dr. Luiz Osório',
  description: 'Sistema completo de gerenciamento de mídia com upload, organização e visualização de arquivos.',
  keywords: ['mídia', 'upload', 'arquivos', 'galeria', 'gerenciamento'],
}

const MediaManagerSkeleton = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="space-y-6">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-64" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        ))}
      </div>
    </div>
  </div>
)

export default function MediaPage() {
  return (
    <Suspense fallback={<MediaManagerSkeleton />}>
      <LazyMediaManager />
    </Suspense>
  )
}