import { readdirSync, writeFileSync } from 'fs'
import { join } from 'path'

const articlesDir = join(process.cwd(), 'public', 'articles')
const indexFile = join(process.cwd(), 'public', 'articles-index.json')

try {
  const files = readdirSync(articlesDir)
  const articles = files
    .filter(file => file.endsWith('.md'))
    .map(file => ({
      slug: file.replace(/\.md$/, ''),
      file
    }))
  
  writeFileSync(indexFile, JSON.stringify(articles, null, 2), 'utf-8')
  console.log(`✅ Generated articles index: ${articles.length} articles`)
  console.log('Articles:', articles.map(a => a.slug).join(', '))
} catch (error) {
  console.error('❌ Failed to generate index:', error.message)
  // Create empty index if directory doesn't exist
  writeFileSync(indexFile, JSON.stringify([], null, 2), 'utf-8')
}

