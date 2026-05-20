'use server'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { slugify } from '@/lib/slugify'

export async function createArticle(formData: FormData) {
  const title = formData.get('title') as string
  const excerpt = formData.get('excerpt') as string
  const content = formData.get('content') as string
  const imageUrl = formData.get('imageUrl') as string
  const published = formData.get('published') === 'on'

  await prisma.newsArticle.create({
    data: {
      title,
      slug: slugify(title),
      excerpt,
      content,
      imageUrl: imageUrl || null,
      published,
      publishedAt: published ? new Date() : null,
    },
  })
  redirect('/admin/noticias')
}

export async function updateArticle(formData: FormData) {
  const id = formData.get('id') as string
  const title = formData.get('title') as string
  const excerpt = formData.get('excerpt') as string
  const content = formData.get('content') as string
  const imageUrl = formData.get('imageUrl') as string
  const published = formData.get('published') === 'on'

  await prisma.newsArticle.update({
    where: { id },
    data: {
      title,
      slug: slugify(title),
      excerpt,
      content,
      imageUrl: imageUrl || null,
      published,
      publishedAt: published ? new Date() : null,
    },
  })
  redirect('/admin/noticias')
}

export async function deleteArticle(formData: FormData) {
  const id = formData.get('id') as string
  await prisma.newsArticle.delete({ where: { id } })
  redirect('/admin/noticias')
}
