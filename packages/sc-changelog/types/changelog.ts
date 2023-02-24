import { JSONContent } from "@tiptap/core";
import { ChangeTypeResults } from "./changeType";
import { MediaResults } from "./common/media";
import { SitecoreProductResults } from "./sitecoreProduct-type";

type Changelog = {
  id: string
  name: string
  readMoreLink: string
  title: string
  description: JSONContent
  breakingChange: boolean
  sitecoreProduct: SitecoreProductResults
  changeType: ChangeTypeResults
  version: string
  releaseDate: string
  image: MediaResults
}
  
export default Changelog

export type ChangelogList = {
  total: string
  results: Changelog[]
}