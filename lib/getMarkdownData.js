import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import recursiveReadSync from 'recursive-readdir-sync'

const postsDirectory = path.join(process.cwd(), 'data')

export async function getMarkdownData(markdownFileName, markdownFolder) {
    //Default to "productMarkdown" for backward compatibility with previous calls
    if (!markdownFolder) {
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


export async function getTaggedMarkdownData(solution,product) {
    var files = recursiveReadSync(postsDirectory);       
    var taggedFiles = []
    for(var i=0;i<files.length;i++) {
        const file = files[i]
     
        const fileContents = fs.readFileSync(file, 'utf8')
        const postMatter = matter(fileContents)
        if((postMatter.data.solution == solution || solution == '') && (postMatter.data.product == product || product == '')) {
            let taggedFile = {
                id: path.basename(file),
                markdown: postMatter.content,
                ...postMatter.data
            }
            taggedFiles = taggedFiles.concat(taggedFile)
        }
    }
    return taggedFiles
}