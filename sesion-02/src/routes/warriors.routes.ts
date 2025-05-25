import { Router, Request, Response } from "express"

import { warriorControllerService } from "../services/warrior.controller.service"

export const initWarriorRoutes = async () => {

    try {
        
        const enrutador = Router()

        const controller = await warriorControllerService()

        enrutador.post("/create", (req: Request, res: Response) => controller.createController(req, res)),
        enrutador.get("/warriors", (req: Request, res: Response) => controller.getAllController(req, res)),
        enrutador.put("/update/:id", (req: Request, res: Response) => controller.updateController(req, res)),
        enrutador.delete("/delete/:id", (req: Request, res: Response) => controller.deleteController(req, res))

        return enrutador

    } catch (error) {
        
        throw new Error (`${error}`)
    }
}