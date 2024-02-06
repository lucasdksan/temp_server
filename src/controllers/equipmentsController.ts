import { Request, Response } from "express";
import EquipmentsModel from "../models/equipmentsModel";
import { equipmentsView, equipmentsViewMany } from "../views/equipmentsView";

export default class EquipmentsController {
    async create(req: Request, res: Response) {
        try {
            const equipmentData = req.body;
            const equipmentsModel = new EquipmentsModel();
            const result = await equipmentsModel.creating(equipmentData);

            if (result) {
                return res.status(200).json({ message: "Equipment created successfully" });
            } else {
                return res.status(500).json({ error: "Error in creating equipment" });
            }
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async list(req: Request, res: Response) {
        try {
            const equipmentsModel = new EquipmentsModel();
            const equipmentList = await equipmentsModel.listing();
            return res.status(200).json(equipmentsViewMany(equipmentList));
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async index(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const equipmentsModel = new EquipmentsModel();
            const result = await equipmentsModel.indexing(id);

            return res.status(200).json(equipmentsView(result));
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const equipmentsModel = new EquipmentsModel();
            const result = await equipmentsModel.excluding(id);

            if (!result) {
                return res.status(500).json({ error: "Error in excluding equipment" });
            } else {
                return res.status(200).json({ message: "Equipment deleted successfully" });
            }
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const updatedData = req.body;
            const equipmentsModel = new EquipmentsModel();

            const result = await equipmentsModel.updating(id, updatedData);

            if (!result) {
                return res.status(500).json({ error: "Error in updating equipment" });
            } else {
                return res.status(200).json({ message: "Equipment updated successfully" });
            }
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }
}
