import jwt from "jsonwebtoken";

export const tokenGenerate = (params: string)=>{
    const token = jwt.sign({ id: params }, process.env.JWT_SECRET as string, {
        expiresIn: 18000
    });
    
    return token;
}