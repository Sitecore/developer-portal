import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'data')

export async function getMarkdownData(markdownFileName, markdownFolder) {
    //Default to "productMarkdown" for backward compatibility with previous calls
    if(!markdownFolder){
        markdownFolder = "productMarkdown"
    }
    const fullPath = path.join(postsDirectory, markdownFolder, markdownFileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const postMetaDataSection = matter(fileContents)

    return {
        id: markdownFileName,
        markdown: postMetaDataSection.content,
        ...postMetaDataSection.data
    }
}