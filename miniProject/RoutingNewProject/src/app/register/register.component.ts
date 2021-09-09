import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!:FormGroup;
  constructor(private fb:FormBuilder, private common:CommonService) { }

  ngOnInit(): void {

    this.registerForm=this.fb.group({


      id:[''],
      empname:[''],
      email:['',[Validators.required,Validators.email]],
      mobileno:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      gender:[''],
      designation:[''],
      userName:['',[Validators.required,Validators.maxLength(8)]],
      password:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10),Validators.pattern('^[A-Z a-z 0-9]+@[A-Z a-z 0-9]+[A-Z a-z]+$')]]
  
  

    })
  }


  onSubmit()
  {
    if(this.registerForm.valid)
    {
this.common.employeeSave(this.registerForm.value).subscribe();
  }

    
  }
  
 


}
