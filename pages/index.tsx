import { allArticles } from 'contentlayer/generated'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [search, setSearch] = useState('')

  const filtered = allArticles.filter(article =>
    article.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold tracking-tight">DR/FT Journal</h1>

      <input
        type="text"
        placeholder="Search articles..."
        className="w-full p-2 border rounded-md"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid gap-4">
        {filtered.map(article => (
          <Link href={`/articles/${article.slug}`} key={article._id}>
            <div className="p-4 rounded-lg shadow hover:bg-gray-50 dark:hover:bg-gray-800 transition">
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p className="text-sm text-gray-600">{article.description}</p>
              <div className="text-xs text-gray-500 mt-1">{article.date}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
