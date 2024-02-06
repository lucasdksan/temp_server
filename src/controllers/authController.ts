import { Request, Response } from "express";

import AuthModel from "../models/authModel";
import { authView } from "../views/authView";
import { AuthenticatedRequest } from "../middlewares/auth";

export default class AuthController {
    async create(req: Request, res: Response) {
        try {
            const body = req.body;
            const authModel = new AuthModel();
            const result = await authModel.creating(body);

            if (!result) res.json({ error: "Error in register!" }).status(500);

            else return res.json({ message: "Register success" }).status(200);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async authenticate(req: Request, res: Response) {
        try {
            const body = req.body;
            const authModel = new AuthModel();
            const { findAdmin, token } = await authModel.authenticating(body);

            return res.json({ user: authView(findAdmin), token }).status(200);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async verify(req: AuthenticatedRequest, res: Response) {
        try {
            const id = req["UserId"];
            const authModel = new AuthModel();
            const result = await authModel.checking(id);

            return res.json(authView(result)).status(200);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async forgotPassword(req: Request, res: Response) {
        try {
            const { email } = req.body;
            const authModel = new AuthModel();
            const result = await authModel.forgoting(email);

            if (!result) res.json({ error: "Error in sending token!" }).status(500);

            else return res.json({ message: "Token sending sucess" }).status(200);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async resetPassword(req: Request, res: Response) {
        try {
            const { token, password, email } = req.body;
            const authModel = new AuthModel();
            const result = await authModel.redefining(email, password, token);

            if (!result) res.json({ error: "Error in sending token!" }).status(500);

            else return res.json({ message: "Token sending sucess" }).status(200);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async updatePass(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const body = req.body;
            const authModel = new AuthModel();
            const result = await authModel.updatingPass(id, body);

            if (!result) res.json({ error: "Error in editing password!" }).status(500);
            else return res.json({ message: "Sucess" }).status(200);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }
}