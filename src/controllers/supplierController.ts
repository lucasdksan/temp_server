import { Request, Response } from "express";
import SupplierModel from "../models/supplierModel";
import { supplierView, supplierViewMany } from "../views/supplierView";

export default class SupplierController {
    async create(req: Request, res: Response){
        try {
            const body = req.body;
            const supplierModel = new SupplierModel();
            const result = await supplierModel.creating(body);

            if(result) return res.json({ message: "Supplier register sucess" }).status(200);

            else return res.json({ message: "Error in register supplier" }).status(500);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async list(req: Request, res: Response) {
        try {
            const supplierModel = new SupplierModel();
            const list = await supplierModel.listing();

            return res.json(supplierViewMany(list)).status(200);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async index(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const supplierModel = new SupplierModel();
            const result = await supplierModel.indexing(id);

            return res.json(supplierView(result)).status(200);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const supplierModel = new SupplierModel();
            const result = await supplierModel.excluding(id);

            if(result) return res.json({ message: "Supplier Deleting" });
            else return res.json({ message: "Error in Supplier Excluding" });
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const body = req.body;
            const supplierModel = new SupplierModel();
            const result = await supplierModel.updating(id, body);

            if(result) return res.json({ message: "Supplier updated" }).status(200);
            else return res.json({ error: "Not updated supplier" }).status(500);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }
}