import { AnimalAbstract } from "../models/animal.abstrac";


export class Cocodrilo extends AnimalAbstract {

    constructor(
        name: string,
        color: string,
        age: number,
    ){
        super(name, color, age)
        this.printAnimal
    }
}