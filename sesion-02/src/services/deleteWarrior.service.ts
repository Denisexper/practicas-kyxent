
import { ModelWarrior } from "../schemas/modelWarrior"
import { Request, Response } from "express"



export const deleteWarriors = async(req: Request, res: Response) => {

    const { id } = req.params;

    try {
        
        await ModelWarrior.findByIdAndDelete(id)

        res.status(200).json({
            msj: "Warrior eliminado con exito"
        })

    } catch (error) {
        
        throw new Error(`${error}`)
    }
}