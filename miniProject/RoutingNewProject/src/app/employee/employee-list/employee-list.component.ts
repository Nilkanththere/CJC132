import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { CommonService } from 'src/app/shared/common.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeelist!:Employee[];
  constructor(private common:CommonService,private location:Location) { }

  ngOnInit(): void {
    this.common.getemployeeList().subscribe(list=>
      {

        this.employeelist=list;
      })
  }


  getback()
  {
    

this.location.back();



  }

deleteemployee(id:number)
{
  this.common.deleteEmployee(id).subscribe();
}


getbackground(emp:Employee)
{
if(emp.gender=="male")
{
  return{ 'background-color':'red'}
}

else if(emp.gender=="female")
{
  return{ 'background-color':'green'}
}

else(emp.gender=="other")
{
  return{ 'background-color':'yellow'}
}



}

}
