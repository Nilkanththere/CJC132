import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  url:string="http://localhost:3000/employee";
  commonmsg!:string;
  constructor(private http:HttpClient)
   { }
   e:Employee=
   {
     id!:0,
    empname!:"",
    gender!:"",
    designation!:"",
    mobileno!:"",
    email!:"",
    userName!:"",
    password!:"",

   }







   sendMessage(messageContent: any) {
    return this.http.post(this.url,
    JSON.stringify(messageContent),
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
  }


employeeSave(emp:Employee):Observable<Employee>
{
  return this.http.post<Employee>(this.url,emp);
}

getemployeeList():Observable<Employee[]>
{
  return this.http.get<Employee[]>(this.url)

}

deleteEmployee(id:number):Observable<number>
{
  return this.http.delete<number>(this.url+"/"+id);
}


getemployee(id:number):Observable<Employee>
{
  return this.http.get<Employee>(this.url+"/"+id);

}


updateEmployee(emp:Employee):Observable<Employee>
{
  return this.http.put<Employee>(this.url+"/"+emp.id,emp);

}
   

}
