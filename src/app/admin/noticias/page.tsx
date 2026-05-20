import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export default async function AdminNoticiasPage() {
  let articles: { id: string; title: string; published: boolean; createdAt: Date }[] = []
  try {
    articles = await prisma.newsArticle.findMany({
      orderBy: { createdAt: 'desc' },
      select: { id: true, title: true, published: true, createdAt: true },
    })
  } catch { /* DB not connected */ }

  return (
    <div className="min-h-screen bg-cream p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold text-navy">Noticias</h1>
            <p className="text-slate-500 text-sm">Panel de administración</p>
          </div>
          <Link
            href="/admin/noticias/new"
            className="bg-teal text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
          >
            + Nueva noticia
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {articles.length === 0 ? (
            <div className="text-center py-16 text-slate-400">
              <p className="text-lg">No hay artículos aún.</p>
              <Link href="/admin/noticias/new" className="text-teal font-semibold hover:underline mt-2 inline-block">
                Crear el primero
              </Link>
            </div>
          ) : (
            <table className="w-full">
              <thead className="bg-cream text-navy text-sm font-semibold">
                <tr>
                  <th className="text-left px-6 py-4">Título</th>
                  <th className="text-left px-6 py-4">Estado</th>
                  <th className="text-left px-6 py-4">Creado</th>
                  <th className="px-6 py-4" />
                </tr>
              </thead>
              <tbody className="divide-y divide-cream">
                {articles.map(a => (
                  <tr key={a.id} className="hover:bg-cream/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-navy font-medium">{a.title}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${a.published ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                        {a.published ? 'Publicado' : 'Borrador'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {new Date(a.createdAt).toLocaleDateString('es-CL')}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link
                        href={`/admin/noticias/${a.id}/edit`}
                        className="text-teal text-sm font-semibold hover:underline"
                      >
                        Editar
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}
