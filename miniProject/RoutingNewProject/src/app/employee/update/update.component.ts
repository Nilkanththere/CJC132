import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/shared/common.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updateForm!:FormGroup;
  constructor(private fb:FormBuilder,private common:CommonService,private location:Location) { }

 
  ngOnInit(): void {

    this.updateForm=this.fb.group({

      id:[''],
      empname:[''],
      gender:[''],
      email:[''],
      mobileno:[''],
      designation:[''],
      userName:[''],
      password:['']



    })
    this.editdata();
  }


  editdata()
  {
    let employeeobj:any=this.location.getState();


     console.log(employeeobj.id);
     if(employeeobj.id!=0)
     {

       this.updateForm.get('id')?.setValue(employeeobj.id);
       this.updateForm.get('empname')?.setValue(employeeobj.empname);
       this.updateForm.get('email')?.setValue(employeeobj.email);
       this.updateForm.get('designation')?.setValue(employeeobj.designation);
       this.updateForm.get('mobileno')?.setValue(employeeobj.mobileno);
       this.updateForm.get('gender')?.setValue(employeeobj.gender);
       this.updateForm.get('userName')?.setValue(employeeobj.userName);
       this.updateForm.get('password')?.setValue(employeeobj.password);

     }
  }


  onSubmit()
  {
this.common.updateEmployee(this.updateForm.value).subscribe();

  }
}
