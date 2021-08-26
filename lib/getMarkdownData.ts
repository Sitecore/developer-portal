import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import recursiveReadSync from 'recursive-readdir-sync'
import { Tags } from '../interfaces/tags'
import { MarkdownAsset, MarkdownMeta } from '../interfaces/markdownAsset'

const postsDirectory = path.join(process.cwd(), 'data/markdown');
const pageDirectory = path.join(process.cwd(), 'data/markdown/page');

export async function getMarkdownData(markdownFileName: string, markdownFolder: string) {
    const fullPath = path.join(postsDirectory, markdownFolder, markdownFileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const postMetaDataSection = matter(fileContents)

    return {
        id: markdownFileName,
        markdown: postMetaDataSection.content,
        ...postMetaDataSection.data
    }
}

export async function getPageLevelInfo(tags: Tags) : Promise<MarkdownMeta> {
    var files = recursiveReadSync(pageDirectory);  
    var taggedFile: MarkdownMeta = {};
    for(var i=0;i<files.length;i++) {
        const file = files[i]
     
        const fileContents = fs.readFileSync(file, 'utf8')
        const postMatter = matter(fileContents)
        if(DoMatchTags(tags, postMatter)) {
            taggedFile = {
                id: path.basename(file),
                ...postMatter.data
            }
        }
    }
    return taggedFile;
}

export async function getTaggedPages(tags: Tags) : Promise<MarkdownMeta[]> {
    var files = recursiveReadSync(pageDirectory);
    var taggedFiles: MarkdownMeta[] = []
    for(var i=0;i<files.length;i++) {
        const file = files[i]
        const fileContents = fs.readFileSync(file, 'utf8')
        const postMatter = matter(fileContents)
        if(DoMatchTags(tags, postMatter) && String(postMatter.data.solution) != String(postMatter.data.product)) {
            let taggedFile: MarkdownMeta = {
                id: path.basename(file),
                ...postMatter.data
            }
            taggedFiles = taggedFiles.concat(taggedFile)
        }
    }
    return taggedFiles
}

export async function getTaggedMarkdownData(tags: Tags) : Promise<MarkdownAsset[]> {
    var files = recursiveReadSync(postsDirectory);
    var taggedFiles: MarkdownAsset[] = []
    for(var i=0;i<files.length;i++) {
        const file = files[i]
        
        // Ignore markdown in the page directory
        if(file.includes('page')) continue;

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

function DoMatchTags(tags: Tags, postMatter: matter.GrayMatterFile<string>) {
    return (postMatter.data.solution == tags.solution || !tags.solution) && 
           (!postMatter.data.product ? false : allTagsInArrayMatch(tags.products!, postMatter.data.product) || !tags.products) && 
           (postMatter.data.area == tags.area || !tags.area)
}

function allTagsInArrayMatch(array1: string[], array2: string[]) {
    if(!array1 || !array2) {
        return false
    }
    for(var i=0;i<array1.length;i++) {
        if(!array2.includes(array1[i])) {
            return false
        }
    }
    return true
}