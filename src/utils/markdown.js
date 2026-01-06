import { marked } from 'marked'
import hljs from 'highlight.js'

// 配置 marked
marked.setOptions({
  highlight: function(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(code, { language: lang }).value
      } catch (err) {
        console.error('代码高亮错误:', err)
      }
    }
    return hljs.highlightAuto(code).value
  },
  breaks: true,
  gfm: true
})

/**
 * 解析 Markdown 内容为 HTML
 * @param {string} markdown - Markdown 文本
 * @returns {string} HTML 字符串
 */
export function parseMarkdown(markdown) {
  return marked.parse(markdown)
}

/**
 * 提取 frontmatter
 * @param {string} content - 包含 frontmatter 的内容
 * @returns {{frontmatter: object, content: string}}
 */
export function extractFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
  const match = content.match(frontmatterRegex)
  
  if (match) {
    const frontmatterText = match[1]
    const markdownContent = match[2]
    
    // 简单的 frontmatter 解析
    const frontmatter = {}
    frontmatterText.split('\n').forEach(line => {
      const colonIndex = line.indexOf(':')
      if (colonIndex > 0) {
        const key = line.substring(0, colonIndex).trim()
        let value = line.substring(colonIndex + 1).trim()
        
        // 处理数组格式 tags: [Vue, JavaScript]
        if (value.startsWith('[') && value.endsWith(']')) {
          value = value.slice(1, -1).split(',').map(item => item.trim().replace(/['"]/g, ''))
        } else {
          // 移除引号
          value = value.replace(/^['"]|['"]$/g, '')
        }
        
        frontmatter[key] = value
      }
    })
    
    return { frontmatter, content: markdownContent }
  }
  
  return { frontmatter: {}, content }
}

