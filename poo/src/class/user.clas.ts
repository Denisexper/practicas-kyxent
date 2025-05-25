import { factoryInterface } from "../interfaces/user.interface";


export class userClass implements factoryInterface{
    
    private name: string
    constructor(

        create: () => void,
        update: () => void,
        deleted: () => void,
        getAll: () => void,
        name: string
    ){
        this.create = create,
        this.update = update,
        this.deleted = deleted,
        this.getAll = getAll,
        this.name = name
    }

    create () {
        console.log(`user created: \nname: ${this.name}`)
    }
    update () {
        console.log("User update sucessfully")
    }
    deleted () {
        console.log("User deleted sucessfully")
    };
    getAll () {
        console.log("Users getting sucessfully")
    };

}