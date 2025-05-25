import { AnimalAbstract } from "../models/animal.abstrac";


export class Gato extends AnimalAbstract {

    constructor(
        name: string,
        color: string,
        age: number
    ){
        super(name, color, age)
        this.printAnimal
    }
}