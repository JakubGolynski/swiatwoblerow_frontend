import { Country } from "./country.model";

export interface Address{
    id:number | null,
    city:string | null,
	street:string | null,
	houseNumber:string | null,
	country:Country | null
}