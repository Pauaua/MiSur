import Link from 'next/link'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  let article = null
  let others: { slug: string; title: string }[] = []

  try {
    article = await prisma.newsArticle.findUnique({
      where: { slug, published: true },
    })
    others = await prisma.newsArticle.findMany({
      where: { published: true, NOT: { slug } },
      take: 3,
      orderBy: { publishedAt: 'desc' },
      select: { slug: true, title: true },
    })
  } catch {
    // DB not connected
  }

  if (!article) notFound()

  return (
    <>
      {/* Cover */}
      <div
        className="relative h-72 md:h-96 flex items-end"
        style={{
          background: article.imageUrl
            ? `url(${article.imageUrl}) center/cover`
            : 'linear-gradient(180deg, #071030, #1E3A8A)',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 pb-10 text-white w-full">
          <p className="text-teal text-sm font-semibold mb-2">
            {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString('es-CL', { day: 'numeric', month: 'long', year: 'numeric' }) : ''}
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold">{article.title}</h1>
        </div>
      </div>

      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/noticias" className="inline-flex items-center gap-2 text-navy text-sm font-semibold mb-8 hover:text-teal transition-colors">
            ← Volver a Noticias
          </Link>

          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed whitespace-pre-wrap">
            {article.content}
          </div>

          {others.length > 0 && (
            <div className="mt-16 pt-10 border-t border-navy/10">
              <h2 className="font-display text-2xl font-bold text-navy mb-6">Otras noticias</h2>
              <ul className="space-y-3">
                {others.map(o => (
                  <li key={o.slug}>
                    <Link href={`/noticias/${o.slug}`} className="text-teal hover:underline font-medium">
                      {o.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
