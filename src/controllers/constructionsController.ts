import { Request, Response } from "express";
import ConstructionsModel from "../models/constructionsModel";
import { constructionsView, constructionsViewMany } from "../views/constructionsView";

export default class ConstructionsController {
    async create(req: Request, res: Response) {
        try {
            const body = req.body;
            const constructionsModel = new ConstructionsModel();

            const result = await constructionsModel.creating(body);

            if(result) return res.json({ message: "Construction Deleting" }).status(200);
            else return res.json({ message: "Error in Construction Excluding" }).status(500);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async list(req: Request, res: Response) {
        try {
            const constructionsModel = new ConstructionsModel();
            const list = await constructionsModel.listing();
            
            return res.status(200).json(constructionsViewMany(list));
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const body = req.body;
            const constructionsModel = new ConstructionsModel();
            const result = await constructionsModel.updating(id, body);

            if(result) return res.json({ message: "Construction updated" }).status(200);
            else return res.json({ error: "Not updated Construction" }).status(500);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async index(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const constructionsModel = new ConstructionsModel();
            const construction = await constructionsModel.indexing(id);

            return res.status(200).json(constructionsView(construction));
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const constructionsModel = new ConstructionsModel();
            const result = await constructionsModel.excluding(id);

            if(result) return res.json({ message: "Construction Deleting" }).status(200);
            else return res.json({ message: "Error in Construction Excluding" }).status(500);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }
}