import { RoleInterface } from "../role.model";
import { Address } from "./address"

export class User{
    constructor(
		public id:number | null,
		public username:string | null,
		public password:string | null,
		public firstName:string | null,
		public lastName:string | null,
		public email:string | null,
		public telephone:string | null,
		public jwtToken:string | null,
		public address:Address | null,
		public roles:Array<RoleInterface> | null
	){}
}