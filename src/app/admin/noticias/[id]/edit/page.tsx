import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import ArticleForm from '@/components/admin/ArticleForm'
import { updateArticle, deleteArticle } from '@/app/admin/noticias/actions'

export default async function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  let article = null
  try {
    article = await prisma.newsArticle.findUnique({ where: { id } })
  } catch { /* DB not connected */ }
  if (!article) notFound()

  return (
    <div className="min-h-screen bg-cream p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-3xl font-bold text-navy mb-8">Editar noticia</h1>
        <ArticleForm action={updateArticle} article={article} />
        <form action={deleteArticle} className="mt-6">
          <input type="hidden" name="id" value={article.id} />
          <button
            type="submit"
            className="text-red-500 text-sm hover:underline"
            onClick={e => { if (!confirm('¿Eliminar este artículo?')) e.preventDefault() }}
          >
            Eliminar artículo
          </button>
        </form>
      </div>
    </div>
  )
}
