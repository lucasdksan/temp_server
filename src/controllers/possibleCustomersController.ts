import { Request, Response } from "express";
import PossibleCustomersModel from "../models/possibleCustomersModel";
import { possibleCustomerViewMany, possibleCustomersView } from "../views/possibleCustomersView";

export default class PossibleCustomersController {
    async list(req: Request, res: Response) {
        try {
            const possibleCustomersModel = new PossibleCustomersModel();
            const list = await possibleCustomersModel.listing();

            return res.json(possibleCustomerViewMany(list)).status(200);
        } catch (error) {
            return res.json({ error }).status(500);
        }
    }

    async create(req: Request, res: Response) {
        try {
            const body = req.body;
            const possibleCustomersModel = new PossibleCustomersModel();

            const result = await possibleCustomersModel.creating(body);
            
            if(result) return res.json({ message: "Possible Customer Added Successfully" }).status(200);
            else return res.json({ error: "Error in create"}).status(500);
        } catch (error) {
            return res.json({ error }).status(500);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const body = req.body;
            const possibleCustomersModel = new PossibleCustomersModel();

            await possibleCustomersModel.updating(id, body);

            return res.json({ message: "Possible Customers update completed successfully" }).status(200);
        } catch (error) {
            return res.json({ error }).status(500);
        }
    }

    async index(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const possibleCustomersModel = new PossibleCustomersModel();
            const result = await possibleCustomersModel.indexing(id);

            return res.json(possibleCustomersView(result)).status(200);
        } catch (error) {
            return res.json({ error }).status(500);
        }
    }

    async delete(req: Request, res: Response) {
        try {   
            const { id } = req.query;
            const possibleCustomersModel = new PossibleCustomersModel();

            const result = await possibleCustomersModel.excluding(id);

            if(result) return res.json({ message: "Possible Customers removed successfully" }).status(200);
            else return res.json({ error: "Error in excluding"}).status(500);
        } catch (error) {
            return res.json({ error }).status(500);
        }
    }

    async store(req: Request, res: Response){
        try {
            const body = req.body;
            const possibleCustomersModel = new PossibleCustomersModel();

            const result = await possibleCustomersModel.stocking(body);

            if(result) return res.json({ message: "Client Registed!" }).status(200);

            return res.json({ message: "Falha ao armazenar os dados" }).status(500);
        } catch (error) {
            return res.json({ error }).status(500);
        }
    }
}