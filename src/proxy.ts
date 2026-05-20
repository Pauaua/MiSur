import { NextRequest, NextResponse } from 'next/server'

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (!pathname.startsWith('/admin')) return NextResponse.next()
  if (pathname === '/admin/login') return NextResponse.next()

  const token = req.cookies.get('admin_token')?.value
  if (token && token === process.env.ADMIN_SECRET) return NextResponse.next()

  const auth = req.headers.get('authorization')
  if (auth === `Bearer ${process.env.ADMIN_SECRET}`) return NextResponse.next()

  return NextResponse.redirect(new URL('/admin/login', req.url))
}

export const config = { matcher: ['/admin/:path*'] }
