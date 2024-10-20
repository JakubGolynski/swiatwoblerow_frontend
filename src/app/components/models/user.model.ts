import { Address } from "./address.model"
import { Role } from "./role.model"

export interface User{
    id:number | null,
    username:string | null,
	password:string | null,
	firstName:string | null,
	lastName:string | null,
	email:string | null,
	telephone:string | null,
	jwtToken:string | null,
	address:Address | null,
	roles:Array<Role> | null
}