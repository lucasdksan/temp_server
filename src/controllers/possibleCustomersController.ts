import { Request, Response } from "express";
import PossibleCustomersModel from "../models/possibleCustomersModel";
import { possibleCustomerViewMany, possibleCustomersView } from "../views/possibleCustomersView";

export default class PossibleCustomersController {
    async list(req: Request, res: Response) {
        try {
            const possibleCustomersModel = new PossibleCustomersModel();
            const list = await possibleCustomersModel.list();

            return res.json(possibleCustomerViewMany(list)).status(200);
        } catch (error) {
            return res.json({ error }).status(500);
        }
    }

    async create(req: Request, res: Response) {
        try {
            const body = req.body;
            const possibleCustomersModel = new PossibleCustomersModel();

            await possibleCustomersModel.process(body);

            return res.json({ message: "Possible Customer Added Successfully" }).status(200);
        } catch (error) {
            return res.json({ error }).status(500);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const body = req.body;
            const possibleCustomersModel = new PossibleCustomersModel();

            await possibleCustomersModel.updata(id, body);

            return res.json({ message: "Possible Customers update completed successfully" }).status(200);
        } catch (error) {
            return res.json({ error }).status(500);
        }
    }

    async index(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const possibleCustomersModel = new PossibleCustomersModel();
            const result = await possibleCustomersModel.get(id);

            return res.json(possibleCustomersView(result)).status(200);
        } catch (error) {
            return res.json({ error }).status(500);
        }
    }

    async delete(req: Request, res: Response) {
        try {   
            const { id } = req.query;
            const possibleCustomersModel = new PossibleCustomersModel();

            await possibleCustomersModel.remove(id);

            return res.json({ message: "Possible Customers removed successfully" }).status(200);
        } catch (error) {
            return res.json({ error }).status(500);
        }
    }
}