import { Category } from "./category.model";
import { Condition } from "./condition.model";

export interface Product{
    id: number | null,
    name: string | null,
    price: number | null,
    createdAt: Date | null,
    quantity: number | null,
    message: string | null,
    rating: number | null,
    quantityRatings: number | null,
    quantityReviews: number | null,        
    owner: string | null,
    category: Category | null,
    conditions: Set<Condition> | null
}