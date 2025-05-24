import { Router, Request, Response } from "express"
import { createWarriorService } from "../services/createWarriror.service"
import { readWarriors } from "../services/readWarrior.service"
import { deleteWarriors } from "../services/deleteWarrior.service"
import { updateWarrior } from "../services/updateWarrior.service"



export const initWarriorRoutes = () => {

    try {
        
        const enrutador = Router()

        enrutador.post("/warriors", (req: Request, res: Response) => createWarriorService(req, res)),
        enrutador.get("/read", (req: Request, res: Response) => readWarriors(req, res)),
        enrutador.delete("/delete/:id", (req: Request, res: Response) => deleteWarriors(req, res)),
        enrutador.put("/update/:id", (req: Request, res: Response) => updateWarrior(req, res))

        return enrutador

    } catch (error) {
        
        throw new Error (`${error}`)
    }
}