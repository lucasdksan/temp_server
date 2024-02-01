import { Request, Response } from "express";
import EmployeesModel from "../models/employeesModel";
import { employeesView, employeesViewMany } from "../views/employeesView";

export default class EmployeesController {
    async create(req: Request, res: Response) {
        try {
            const body = req.body;
            const employeesModel = new EmployeesModel();
            const result = await employeesModel.creating(body);

            if (result) {
                return res.status(200).json({ message: "Employee created successfully" });
            } else {
                return res.status(500).json({ error: "Error in creating equipment" });
            }
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async list(req: Request, res: Response) {
        try {
            const employeesModel = new EmployeesModel();
            const list = await employeesModel.listing();

            return res.json(employeesViewMany(list)).status(200);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async index(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const employeesModel = new EmployeesModel();

            const result = await employeesModel.indexing(id);

            return res.status(200).json(employeesView(result));
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const employeesModel = new EmployeesModel();

            const result = await employeesModel.excluding(id);

            if (!result) {
                return res.status(500).json({ error: "Error in excluding employee" });
            } else {
                return res.status(200).json({ message: "Employee deleted successfully" });
            }

        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const updatedData = req.body;
            const employeesModel = new EmployeesModel();

            const result = await employeesModel.updating(id, updatedData);

            if (!result) {
                return res.status(500).json({ error: "Error in updating employee" });
            } else {
                return res.status(200).json({ message: "Employee updated successfully" });
            }

        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }
}