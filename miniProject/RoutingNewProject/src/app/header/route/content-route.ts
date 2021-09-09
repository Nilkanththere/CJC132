import { Routes } from '@angular/router';
import { AboutUsComponent } from 'src/app/about-us/about-us.component';
import { CompanyComponent } from 'src/app/company/company/company.component';
import { ContactUsComponent } from 'src/app/contact-us/contact-us.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { EmployeeComponent } from 'src/app/employee/employee/employee.component';




export const contentroutes: Routes = [
    {
     path:'',redirectTo:'dashboard',pathMatch:'full'
    
    }
    ,
    {
      path:'dashboard',component:DashboardComponent
     
     }
    ,
    {
      path:'company',component:CompanyComponent
     
     }
    ,
    {
      path:'employee',component:EmployeeComponent
     
     }
    ,
    {
      path:'contact-us',component:ContactUsComponent
     
     }
     ,
     {
      path:'about-us',component:AboutUsComponent
     
     }
     ,
     {
       path:'company',loadChildren:()=>import('src/app/company/company.module').then(m=>m.CompanyModule)
     }
    ,
    {
      path:'employee',loadChildren:()=>import('src/app/employee/employee.module').then(m=>m.EmployeeModule)
    }
    
    
    ];
    