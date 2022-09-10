import { CountryInterface } from "../country.model";

export class Address{
	constructor(
		public id:number,
    	public city:string,
		public street:string,
		public houseNumber:string,
		public country:CountryInterface
	){}
}