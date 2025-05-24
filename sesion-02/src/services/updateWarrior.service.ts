import { warriorInterface } from "../interfaces/warrior.interface"
import { ModelWarrior } from "../schemas/modelWarrior";
import { Request, Response } from "express";


// const updateWarriorRepository = async (dataWarrior : warriorInterface) : Promise<warriorInterface> => {

//     try {

//         const updateWarrior = await ModelWarrior.findByIdAndUpdate();

//          return dataWarrior;

//     } catch (error) {
        
//         throw new Error(`${error}`)
//     }
// }


export const updateWarrior = async (req: Request, res: Response) => {

    const { id } = req.params;

    const { name, age, powers, guns, typeContext } = req.body;

    try {
        
        const response = await ModelWarrior.findByIdAndUpdate(id, {name, age, powers, guns, typeContext}, {new: true})

        res.status(200).json({
            msj: "warrior actualizado correctamente",
            data: response
        })

    } catch (error) {
        
        throw new Error(`${error}`)
    }
}