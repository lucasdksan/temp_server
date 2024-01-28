import { Request, Response } from "express";
import EquipmentsModel from "../models/equipmentsModel";
import { equipmentsViewMany } from "../views/equipmentsView";

export default class EquipmentsController {
    async create(req: Request, res: Response) {
        try {
            const body = req.body;
            const equipmentsModel = new EquipmentsModel();

            const result = await equipmentsModel.creating(body);

            if(result) return res.json({ message: "Deu certo" }).status(200);
            else return res.json({ error: "Error in create"}).status(500);
        } catch (error) {
            return res.json({ error }).status(500);
        }
    }

    async list(req: Request, res: Response) {
        try {
            const equipmentsModel = new EquipmentsModel();
            const list = await equipmentsModel.listing()

            return res.json(equipmentsViewMany(list)).status(200);
        } catch (error) {
            return res.json({ error }).status(500);
        }
    }
}