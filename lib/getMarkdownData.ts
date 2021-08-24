import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import recursiveReadSync from 'recursive-readdir-sync'
import { Tags } from '../interfaces/tags'
import { MarkdownAsset } from '../interfaces/markdownAsset'

const postsDirectory = path.join(process.cwd(), 'data');
const pageDirectory = path.join(process.cwd(), 'data/pageMarkdown');

export async function getMarkdownData(markdownFileName: string, markdownFolder: string) {
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

export async function getPageLevelInfo(page: string) {
    var files = recursiveReadSync(pageDirectory);       
    var taggedFile = {};
    for(var i=0;i<files.length;i++) {
        const file = files[i]
     
        const fileContents = fs.readFileSync(file, 'utf8')
        const postMatter = matter(fileContents)
        if(DoesPageMatch(page, postMatter)) {
            taggedFile = {
                id: path.basename(file),
                ...postMatter.data
            }
        }
    }
    return taggedFile;
}


export async function getTaggedMarkdownData(tags: Tags) {
    var files = recursiveReadSync(postsDirectory);       
    var taggedFiles: MarkdownAsset[] = []
    for(var i=0;i<files.length;i++) {
        const file = files[i]
     
        const fileContents = fs.readFileSync(file, 'utf8')
        const postMatter = matter(fileContents)
        if(DoMatchTags(tags, postMatter)) {
            let taggedFile: MarkdownAsset = {
                id: path.basename(file),
                markdown: postMatter.content,
                ...postMatter.data
            }
            taggedFiles = taggedFiles.concat(taggedFile)
        }
    }
    return taggedFiles
}

function DoesPageMatch(page: string, postMatter: matter.GrayMatterFile<string>) {
    return (postMatter.data.page === page)
}

function DoMatchTags(tags: Tags, postMatter: matter.GrayMatterFile<string>) {
    return (postMatter.data.solution == tags.solution || !tags.solution) && 
           (postMatter.data.product == tags.product || !tags.product) && 
           (postMatter.data.area == tags.area || !tags.area)
}