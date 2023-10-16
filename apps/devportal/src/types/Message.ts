export type Message = {
    type: MessageType
    text: string
}

export enum MessageType {
    User,
    Assistant
}