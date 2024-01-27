import bcrypt from "bcryptjs";

export const crypt = (password: string)=>{
    const hash = bcrypt.hashSync(password, 10);

    return hash;
}

export const comparePassword = async (password: string, key: string)=>{
    const compared = await bcrypt.compare(password, key);

    return compared;
}