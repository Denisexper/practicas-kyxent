
//abstraccion POO (no las podes intanciar a las clases abstractas)
export abstract class AnimalAbstract {

    protected name : string;
    protected color : string;
    protected age : number;

    constructor(
        name: string,
        color : string,
        age : number
    ) {
        
        this.name = name,
        this.color = color,
        this.age = age
    }

    printAnimal() : string{
        return`
            ${this.name}
            ${this.color}
            ${this.age}

        `
    }
}

