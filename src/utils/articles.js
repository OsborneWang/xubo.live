import { extractFrontmatter } from './markdown.js'

/**
 * 获取文章索引列表
 * @returns {Promise<Array>} 文章索引列表
 */
async function getArticleList() {
  try {
    // 从自动生成的索引文件读取文章列表
    const response = await fetch('/articles-index.json')
    if (!response.ok) {
      console.warn('文章索引文件不存在，使用空列表')
      return []
    }
    const articleList = await response.json()
    return articleList
  } catch (error) {
    console.warn('读取文章索引失败，使用空列表:', error)
    return []
  }
}

/**
 * 获取所有文章列表
 * @returns {Promise<Array>} 文章列表
 */
export async function getArticles() {
  try {
    const articleList = await getArticleList()
    const articles = []
    
    for (const articleInfo of articleList) {
      try {
        const response = await fetch(`/articles/${articleInfo.file}`)
        if (!response.ok) continue
        
        const content = await response.text()
        const { frontmatter, content: markdownContent } = extractFrontmatter(content)
        
        articles.push({
          slug: articleInfo.slug,
          title: frontmatter.title || articleInfo.slug,
          date: frontmatter.date || new Date().toISOString().split('T')[0],
          tags: frontmatter.tags || [],
          excerpt: frontmatter.excerpt || markdownContent.substring(0, 150) + '...',
          ...frontmatter
        })
      } catch (error) {
        console.error(`加载文章 ${articleInfo.slug} 失败:`, error)
      }
    }
    
    // 按日期排序（最新的在前）
    articles.sort((a, b) => new Date(b.date) - new Date(a.date))
    
    return articles
  } catch (error) {
    console.error('获取文章列表失败:', error)
    return []
  }
}

/**
 * 根据 slug 获取单篇文章
 * @param {string} slug - 文章 slug
 * @returns {Promise<{frontmatter: object, content: string, html: string}|null>}
 */
export async function getArticle(slug) {
  try {
    const articleList = await getArticleList()
    const articleInfo = articleList.find(a => a.slug === slug)
    if (!articleInfo) return null
    
    const response = await fetch(`/articles/${articleInfo.file}`)
    if (!response.ok) return null
    
    const content = await response.text()
    const { frontmatter, content: markdownContent } = extractFrontmatter(content)
    
    return {
      slug,
      frontmatter,
      content: markdownContent,
      title: frontmatter.title || slug,
      date: frontmatter.date || new Date().toISOString().split('T')[0],
      tags: frontmatter.tags || []
    }
  } catch (error) {
    console.error('获取文章失败:', error)
    return null
  }
}

