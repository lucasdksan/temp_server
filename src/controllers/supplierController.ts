import { Request, Response } from "express";
import SupplierModal from "../models/supplierModal";
import { supplierView, supplierViewMany } from "../views/supplierView";

export default class SupplierController {
    async create(req: Request, res: Response){
        try {
            const body = req.body;
            const supplierModal = new SupplierModal();

            const result = await supplierModal.creating(body);

            if(result) return res.json({ message: "Supplier register sucess" }).status(200);

            else return res.json({ message: "Error in register supplier" }).status(500);
        } catch (error) {
            return res.json(error).status(500);
        }
    }

    async list(req: Request, res: Response) {
        try {
            const supplierModal = new SupplierModal();
            const list = await supplierModal.listing();

            return res.json(supplierViewMany(list)).status(200);
        } catch (error) {
            return res.json(error).status(500);
        }
    }

    async index(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const supplierModal = new SupplierModal();
            const result = await supplierModal.indexing(id);

            return res.json(supplierView(result)).status(200);
        } catch (error) {
            return res.json(error).status(500);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const supplierModal = new SupplierModal();
            const result = await supplierModal.excluding(id);

            if(result) return res.json({ message: "Supplier Deleting" });
            else return res.json({ message: "Error in Supplier Excluding" });
        } catch (error) {
            return res.json(error).status(500);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const body = req.body;
            const supplierModal = new SupplierModal();

            const result = await supplierModal.updating(id, body);

            if(result) return res.json({ message: "Supplier updated" }).status(200);
            else return res.json({ error: "Not updated supplier" }).status(500);
        } catch (error) {
            return res.json(error).status(500);
        }
    }
}