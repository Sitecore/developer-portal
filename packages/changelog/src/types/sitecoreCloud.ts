type SitecoreCloud = {
    id: string
    name: string
    cloudName: string
}
export default SitecoreCloud

export type SitecoreCloudResults = {
    total: string;
    results: SitecoreCloud[];
}