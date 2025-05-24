import { Request, Response } from "express"
import { warriorInterface } from "../interfaces/warrior.interface"
import { ModelWarrior } from "../schemas/modelWarrior"



const createWarriorRepository = async(dataWarrio : warriorInterface) : Promise<warriorInterface> => {
    
    try {
        
        const warrior = await ModelWarrior.create(dataWarrio)

        return warrior
        
    } catch (error) {
        
        throw new Error(`${error}`)
    }
}

export const createWarriorService = async (req: Request, res: Response) => {

    const { name, age, powers, guns, typeContext } = req.body

    try {
        
        const response = await createWarriorRepository({name, age, powers, guns, typeContext })

        res.status(201).json({
            msj: "warrior created sucessfully",
            data: response
        })

    } catch (error) {
        
        throw new Error(`${error}`)
    }
}