import { CountryInterface } from "./country.model";

export interface AddressInterface{
    id:number,
    city:string,
	street:string,
	houseNumber:string,
	country:CountryInterface
}