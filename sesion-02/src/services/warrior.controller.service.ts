import { Request, Response } from "express"
import { warriorRepostory } from "./warrior.repository";
import { ModelWarrior } from "../schemas/modelWarrior";


//factory functions simulan ser clases (como las clases del controlador que hago en js)
export const warriorControllerService = async () => ({

    createController: async (req: Request, res: Response) => {

        const { name, age, powers, guns, typeContext } = req.body;

        try {
            
            const repository = warriorRepostory();

            const response = (repository).create({name, age, powers, guns, typeContext})

            res.status(200).json({
                msj: "warrior created",
                data: await response
            })
        } catch (error) {
            
            res.status(500).json({
                msj: "uknow error",
                error: error instanceof Error
            })
            
            throw new Error (`${error}`)
        }
    },

    getAllController: async (req: Request, res: Response) => {
        try {
            
            const repository = warriorRepostory()

            const warriors = repository.getAll();

            res.status(200).json({
                msj: "warrios obtenidos",

                data: await warriors
            })

            
        } catch (error) {
            
            res.status(500).json({
                msj: "uknow error",
                error: error instanceof Error
            })

            throw new Error(`${error}`)
        }
    },

    updateController: async(req: Request, res: Response) => {

        const { name, age, powers, guns, typeContext } = req.body;

        const { id } = req.params;

        try {
            
            const repository = warriorRepostory()

            const response = await repository.updateWarrior( id, {name, age, powers, guns, typeContext})

            res.status(200).json({
                msj: "update warrior sucessfully",
                data: await response
            })
        } catch (error) {
            
            res.status(500).json({
                msj: "uknow error",
                error: error instanceof Error
            })

            throw new Error(`${error}`)
        }
    },

    deleteController: async(req: Request, res: Response) => {

        const { id } = req.params;

        try {
            
            const repository = warriorRepostory();

            const response = await repository.deleteById(id);

            res.status(200).json({
                msj: "warrior deleted",
                data: await response
            })


        } catch (error) {
            
            res.status(500).json({
                msj: "uknow error",
                error: error instanceof Error
            })

            throw new Error(`${error}`)
        }
    }
})