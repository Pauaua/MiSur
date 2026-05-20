import ArticleForm from '@/components/admin/ArticleForm'
import { createArticle } from '@/app/admin/noticias/actions'

export default function NewArticlePage() {
  return (
    <div className="min-h-screen bg-cream p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-3xl font-bold text-navy mb-8">Nueva noticia</h1>
        <ArticleForm action={createArticle} />
      </div>
    </div>
  )
}
