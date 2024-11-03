export interface Review{
    id: number,
    message: string,
    createdAt: Date,
    quantityThumbsUp: number,
    quantityThumbsDown: number,
    reviewOwner: string
}