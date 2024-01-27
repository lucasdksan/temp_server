import { authTypes } from "../types/authTypes";

export function authView(data: authTypes){    
    const { created_at, update_at, password, ...auth_view } = data;

    return auth_view;
}

export function authViewMany(data: authTypes[]){
    return data.map( auth => authView(auth) );
}