import { Request, Response } from "express";
import AdminModel from "../models/adminModel";
import { adminsView, adminsViewMany } from "../views/adminView";


export default class AdminController{ 
    async create(req: Request, res: Response) {
        try {
            const body = req.body;
            const adminModel = new AdminModel();
            const result = await adminModel.creating(body);
            
            if(result) return res.json({ message: "Admin Create" }).status(200);
            else return res.json({ message: "Error in Admin Create" }).status(500);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async index(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const adminModel = new AdminModel();
            const admin = await adminModel.indexing(id);

            return res.status(200).json(adminsView(admin));
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async list(req: Request, res: Response) {
        try {
            const adminModel = new AdminModel();
            const list = await adminModel.listing();

            return res.status(200).json(adminsViewMany(list));
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const body = req.body;
            const adminModel = new AdminModel();
            const result = await adminModel.updating(id, body);

            if(result) return res.json({ message: "Admin updated" }).status(200);
            else return res.json({ error: "Not updated Admin" }).status(500);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const adminModel = new AdminModel();
            const result = await adminModel.excluding(id);

            if(result) return res.json({ message: "Admin Deleting" }).status(200);
            else return res.json({ message: "Error in Admin Excluding" }).status(500);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }
}