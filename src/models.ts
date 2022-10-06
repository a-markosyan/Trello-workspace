export interface IList {
    id: number
    title: string
    order?: number
    card?: ICard
}

interface ICard{
    list_id?: number
    title?: string
    order?: number
}