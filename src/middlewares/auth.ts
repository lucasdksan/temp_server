import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthenticatedRequest extends Request {
    UserId?: string;
}

export default function authMiddleware(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    req;
    const authHeader = req.headers.authorization;

    if (!authHeader) return res.status(401).json({ error: "No token provided" });

    const parts = authHeader.split(" ");

    if (!(parts.length === 2)) return res.status(401).json({ error: "Token error" });

    const [schema, token] = parts;

    if (/^$Bearer$/i.test(schema)) return res.status(401).json({ error: "Token malformatted" });

    jwt.verify(token, process.env.JWT_SECRET as string, (err: any, decoded: any) => {
        if (err) {
            return res.status(401).json({ error: 'Token invalid' });
        }
        req.UserId = decoded.id;
        return next();
    });
}