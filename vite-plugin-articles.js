import { readdirSync, writeFileSync } from 'fs'
import { join } from 'path'

/**
 * Vite 插件：自动扫描文章目录并生成索引
 */
export function articlesPlugin() {
  return {
    name: 'articles-plugin',
    buildStart() {
      // 扫描 public/articles 目录
      const articlesDir = join(process.cwd(), 'public', 'articles')
      const indexFile = join(process.cwd(), 'public', 'articles-index.json')
      
      try {
        const files = readdirSync(articlesDir)
        const articles = files
          .filter(file => file.endsWith('.md'))
          .map(file => {
            const slug = file.replace(/\.md$/, '')
            return {
              slug,
              file
            }
          })
        
        // 生成索引文件
        writeFileSync(indexFile, JSON.stringify(articles, null, 2), 'utf-8')
        console.log(`✅ 已扫描 ${articles.length} 篇文章`)
      } catch (error) {
        console.warn('⚠️  扫描文章目录失败:', error.message)
        // 如果目录不存在，创建空索引
        writeFileSync(indexFile, JSON.stringify([], null, 2), 'utf-8')
      }
    },
    configureServer(server) {
      // 开发模式下，先生成一次索引
      const articlesDir = join(process.cwd(), 'public', 'articles')
      const indexFile = join(process.cwd(), 'public', 'articles-index.json')
      
      const updateIndex = () => {
        try {
          const files = readdirSync(articlesDir)
          const articles = files
            .filter(file => file.endsWith('.md'))
            .map(file => {
              const slug = file.replace(/\.md$/, '')
              return {
                slug,
                file
              }
            })
          
          writeFileSync(indexFile, JSON.stringify(articles, null, 2), 'utf-8')
          console.log(`✅ 已更新文章索引: ${articles.length} 篇文章`)
        } catch (error) {
          console.warn('⚠️  更新文章索引失败:', error.message)
        }
      }
      
      // 启动时生成索引
      updateIndex()
      
      // 监听文件变化
      server.watcher.on('add', (path) => {
        if (path.includes('public/articles') && path.endsWith('.md')) {
          updateIndex()
        }
      })
      
      server.watcher.on('unlink', (path) => {
        if (path.includes('public/articles') && path.endsWith('.md')) {
          updateIndex()
        }
      })
    }
  }
}

