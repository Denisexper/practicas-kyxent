import { warriorInterface } from "../interfaces/warrior.interface"
import { Request, Response } from "express"
import { ModelWarrior } from "../schemas/modelWarrior"

// const readWarriorsRepository = async (dataWarrrior : warriorInterface) : Promise<warriorInterface> => {

//     try {
        
//         return dataWarrrior

//     } catch (error) {
        
//         throw new Error(`${error}`)
//     }

// }

export const readWarriors = async(req: Request, res: Response) => {

    try {
        
        const warriors = await ModelWarrior.find()

        res.status(200).json({
            msj: "Warrios obtenidos con exito",
            data: warriors
        })

    } catch (error) {
        
        throw new Error(`${error}`)
    }
}