import { powersType, gunsType, typeContextType } from "../types/warrior.type"

export interface warriorInterface {
    name : string,
    age : number,
    powers : powersType[],
    guns : gunsType[],
    typeContext : typeContextType
}