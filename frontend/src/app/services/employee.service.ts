import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //Para conectar el frontend con el server
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee: Employee; //Para seleccionar un empleado
  employees: Employee[];

  readonly URL_API = 'http://localhost:3000/api/employees';

  constructor(private http:HttpClient) { //Instanciar http y tener la propoiedad dentro de la clase
    this.selectedEmployee = new Employee();
    this.employees = new Array();
  }

  getEmployees(){
    return this.http.get(this.URL_API);
  }

  postEmployee(Employee: Employee){
    return this.http.post(this.URL_API,Employee);
  }

  putEmployee(employee: Employee){
    return this.http.put(this.URL_API + `/${employee._id}`, employee);
  }

  deleteEmployee(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
