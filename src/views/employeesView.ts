import { employeesTypes } from "../types/employeesTypes";

export function employeesView(data: employeesTypes){    
    const { created_at, update_at, modification_record_id, ...employee_view } = data;

    return employee_view;
}

export function employeesViewMany(data: employeesTypes[]){
    return data.map( employee => employeesView(employee) );
}