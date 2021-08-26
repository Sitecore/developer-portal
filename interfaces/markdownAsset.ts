export type MarkdownAsset = MardownMeta & {
    markdown: string
}

export type MardownMeta = {
    id?: string
    prettyName?: string
    solution?: string
    product?: string
    description?: string
    stackexchange?: string[]
}