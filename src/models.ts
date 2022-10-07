export interface IList {
    id: number
    title: string
    order?: number
}

export interface ICard {
    id: number
    list_id: number
    title: string
    order: number
}

export const enum FormType {
    CARD,
    LIST
}