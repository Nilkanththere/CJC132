import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/employee';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private routes:ActivatedRoute,private common:CommonService) { }

  employeeobj!:Employee;
  ngOnInit(): void {

  // let empobj1=parseInt(this.routes.snapshot.paramMap.get('id')!)
  // let empobj=parseInt(this.routes.snapshot.paramMap.get('id')!);

  // this.common.getemployee(empobj).subscribe(data=>{

  //    console.log(data);
  //    this.employeeobj=data;
  // })

this.routes.paramMap.subscribe(param1=>
  {

    this.common.getemployee(parseInt(param1.get('id')!)).subscribe(

     data=>{

      this.employeeobj=data;
     }
      )
  })
  }

}
