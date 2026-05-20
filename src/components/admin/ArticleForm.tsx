'use client'
import { useRef } from 'react'

interface ArticleData {
  id: string
  title: string
  excerpt: string
  content: string
  imageUrl: string | null
  published: boolean
}

interface ArticleFormProps {
  action: (formData: FormData) => Promise<void>
  article?: ArticleData
}

export default function ArticleForm({ action, article }: ArticleFormProps) {
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <form ref={formRef} action={action} className="bg-white rounded-2xl shadow-sm p-8 space-y-6">
      {article && <input type="hidden" name="id" value={article.id} />}

      <div>
        <label className="block text-sm font-semibold text-navy mb-1">Título *</label>
        <input
          name="title"
          required
          defaultValue={article?.title}
          className="w-full border border-navy/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy mb-1">Extracto *</label>
        <textarea
          name="excerpt"
          required
          rows={2}
          defaultValue={article?.excerpt}
          className="w-full border border-navy/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy mb-1">Contenido (Markdown) *</label>
        <textarea
          name="content"
          required
          rows={12}
          defaultValue={article?.content}
          className="w-full border border-navy/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal font-mono resize-y"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy mb-1">URL de imagen (opcional)</label>
        <input
          name="imageUrl"
          type="url"
          defaultValue={article?.imageUrl ?? ''}
          className="w-full border border-navy/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal"
          placeholder="https://..."
        />
      </div>

      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          name="published"
          defaultChecked={article?.published ?? false}
          className="accent-teal w-4 h-4"
        />
        <span className="text-sm font-semibold text-navy">Publicado</span>
      </label>

      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-navy text-white font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity"
        >
          Guardar
        </button>
        <a href="/admin/noticias" className="text-slate-500 text-sm self-center hover:underline">
          Cancelar
        </a>
      </div>
    </form>
  )
}
