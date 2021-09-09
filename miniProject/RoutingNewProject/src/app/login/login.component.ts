import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;


  constructor( private fb:FormBuilder, private router:Router,private common:CommonService) { }

  ngOnInit(): void {

    this.createLoginForm()
  }
  
  createLoginForm()
  {
this.loginForm=this.fb.group(
  {
    userName:['',[ Validators.required,Validators.minLength(3)]],
    password:['', [Validators.required, Validators.required,Validators.minLength(3),Validators.maxLength(8)]]
  }
)
  }
abc!:string;

  onLoginSubmit()
  {
this.common.getemployeeList().subscribe(list=>
  {
    for(let emp of list)
    {
     if(this.loginForm.get('userName')?.value==emp.userName && this.loginForm.get('password')?.value==emp.password)
      {
this.router.navigate(['login/header']);
      }
     
     


    }
    this.abc="Invalid Credential ";
  })
  this.router.navigate(['login']);
  }

}

