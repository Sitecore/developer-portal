import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'productMarkdown')

export async function getMarkdownData(markdownFileName) {
    const fullPath = path.join(postsDirectory, markdownFileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const postMetaDataSection = matter(fileContents)

    return {
        id: markdownFileName,
        markdown: postMetaDataSection.content,
        ...postMetaDataSection.data
    }
}