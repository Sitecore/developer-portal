type ChangeType = {
    id: string
    name: string
    changeType: string
}
export default ChangeType


export type ChangeTypeResults = {
    total: string;
    results: ChangeType[];
}