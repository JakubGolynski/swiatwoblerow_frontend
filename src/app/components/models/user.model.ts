import { AddressInterface } from "./address.model"
import { RoleInterface } from "./role.model"

export interface UserInterface{
    id:number,
    username:string,
	password:string,
	firstName:string,
	lastName:string,
	email:string,
	telephone:string,
	jwtToken:string,
	address:AddressInterface,
	roles:Array<RoleInterface>
}