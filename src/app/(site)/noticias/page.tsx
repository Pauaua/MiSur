import Link from 'next/link'
import { prisma } from '@/lib/prisma'

const PER_PAGE = 6

export default async function NoticiasPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const params = await searchParams
  const page = Math.max(1, Number(params.page ?? 1))

  let articles: { id: string; slug: string; title: string; excerpt: string; imageUrl: string | null; publishedAt: Date | null }[] = []
  let total = 0

  try {
    ;[articles, total] = await Promise.all([
      prisma.newsArticle.findMany({
        where: { published: true },
        orderBy: { publishedAt: 'desc' },
        skip: (page - 1) * PER_PAGE,
        take: PER_PAGE,
        select: { id: true, slug: true, title: true, excerpt: true, imageUrl: true, publishedAt: true },
      }),
      prisma.newsArticle.count({ where: { published: true } }),
    ])
  } catch {
    // DB not connected yet
  }

  const totalPages = Math.ceil(total / PER_PAGE)

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative pt-36 pb-32 text-white text-center overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #060D2C 0%, #07102C 50%, #0D1B52 100%)' }}
      >
        {/* Caustic blobs */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(77,196,192,0.07) 0%, transparent 70%)', top: '-10%', left: '15%', filter: 'blur(50px)', animation: 'caustic-a 10s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(44,80,200,0.08) 0%, transparent 70%)', bottom: '0%', right: '20%', filter: 'blur(40px)', animation: 'caustic-b 13s ease-in-out infinite' }} />
        </div>

        {/* Surface shimmer */}
        <div aria-hidden="true" style={{
          position: 'absolute', top: '35%', left: 0, right: 0, height: 2,
          background: 'linear-gradient(90deg, transparent 0%, rgba(77,196,192,0.3) 30%, rgba(106,144,232,0.4) 60%, transparent 100%)',
          animation: 'surface-shimmer 5s ease-in-out infinite',
          pointerEvents: 'none',
        }} />

        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-4">Blog</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Noticias</h1>
          <svg viewBox="0 0 140 16" xmlns="http://www.w3.org/2000/svg" style={{ width: 140, margin: '0 auto 24px', display: 'block' }}>
            <path d="M0,8 C18,2 35,14 52,8 C69,2 86,14 103,8 C120,2 132,14 140,8" fill="none" stroke="#4DC4C0" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, lineHeight: 1.7 }}>
            Mantente informado sobre agua, salud y las novedades de Mi Sur.
          </p>
        </div>

        {/* Bottom wave */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 80 }}>
            <path d="M0,50 C360,10 1080,70 1440,30 L1440,80 L0,80 Z" fill="#f0fafb"/>
          </svg>
        </div>
      </section>

      {/* ── Articles ── */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #f0fafb 0%, #e6f6f8 50%, #edf7f9 100%)' }}
      >
        {/* Sand dots */}
        <svg aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04, pointerEvents: 'none' }}>
          <pattern id="dots-n" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1" fill="#1E3A8A"/><circle cx="13" cy="13" r="1.5" fill="#4DC4C0"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots-n)"/>
        </svg>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[40vh]">
          {articles.length === 0 ? (
            <div style={{ textAlign: 'center', paddingTop: 80, paddingBottom: 80 }}>
              {/* Animated drop */}
              <svg width="80" height="100" viewBox="0 0 24 30" style={{ margin: '0 auto 24px', display: 'block', filter: 'drop-shadow(0 0 12px rgba(77,196,192,0.5))' }}>
                <path d="M12 1C12 1 2 13 2 20A10 10 0 0 0 22 20C22 13 12 1 12 1Z" fill="none" stroke="#4DC4C0" strokeWidth="1.2"/>
              </svg>
              <p className="font-display text-3xl font-bold text-navy mb-3">Próximamente</p>
              <p style={{ color: '#3a5a7a', fontSize: 16 }}>Estamos preparando contenido para ti. ¡Vuelve pronto!</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((a, idx) => (
                  <Link key={a.id} href={`/noticias/${a.slug}`} style={{ textDecoration: 'none' }}>
                    <article
                      style={{
                        background: `linear-gradient(135deg, hsla(${190 + idx * 10},60%,96%,0.9) 0%, hsla(${190 + idx * 10},50%,92%,0.85) 100%)`,
                        backdropFilter: 'blur(16px)',
                        border: `1px solid hsla(${190 + idx * 10},60%,80%,0.5)`,
                        borderRadius: '2rem',
                        overflow: 'hidden',
                        boxShadow: `0 8px 32px hsla(${190 + idx * 10},60%,60%,0.1), inset 0 1px 0 rgba(255,255,255,0.8)`,
                        transition: 'transform 0.3s, box-shadow 0.3s',
                      }}
                    >
                      {/* Image / gradient header */}
                      <div style={{
                        height: 180, position: 'relative', overflow: 'hidden',
                        background: a.imageUrl
                          ? `url(${a.imageUrl}) center/cover`
                          : 'linear-gradient(135deg, #0D1B52, #4DC4C0)',
                      }}>
                        {/* Surface shimmer overlay */}
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)', animation: `surface-shimmer ${4 + idx}s ease-in-out infinite` }} />
                        {/* Date bubble */}
                        {a.publishedAt && (
                          <div style={{
                            position: 'absolute', bottom: 12, left: 16,
                            background: 'rgba(77,196,192,0.9)', color: 'white',
                            fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 99,
                            backdropFilter: 'blur(8px)',
                          }}>
                            {new Date(a.publishedAt).toLocaleDateString('es-CL', { day: 'numeric', month: 'long', year: 'numeric' })}
                          </div>
                        )}
                      </div>

                      <div style={{ padding: '1.5rem' }}>
                        <h2 className="font-display font-bold text-navy mb-3" style={{ fontSize: 18, lineHeight: 1.4 }}>
                          {a.title}
                        </h2>
                        <p style={{ color: '#3a5a7a', fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>{a.excerpt}</p>
                        <span style={{ color: '#4DC4C0', fontSize: 13, fontWeight: 600 }}>
                          Leer más →
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 48 }}>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                    <Link
                      key={p}
                      href={`/noticias?page=${p}`}
                      style={{
                        width: 42, height: 42, borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 14, fontWeight: 600, textDecoration: 'none',
                        background: p === page ? 'linear-gradient(135deg, #4DC4C0, #2C50C8)' : 'rgba(255,255,255,0.8)',
                        color: p === page ? 'white' : '#1E3A8A',
                        border: p === page ? 'none' : '1px solid rgba(77,196,192,0.3)',
                        boxShadow: p === page ? '0 4px 16px rgba(77,196,192,0.3)' : 'none',
                      }}
                    >
                      {p}
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  )
}
