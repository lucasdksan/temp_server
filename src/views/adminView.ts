import { adminTypes } from "../types/adminTypes";

export function adminsView(data: adminTypes){    
    const { created_at, update_at, password, passwordResetExpires, passwordResetToken, token, ...admin_view } = data;

    return admin_view;
}

export function adminsViewMany(data: adminTypes[]){
    return data.map( admin => adminsView(admin) );
}