import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CompanyComponent } from './company/company/company.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { HeaderContentComponent } from './header/header-content/header-content.component';
import { contentroutes } from './header/route/content-route';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


  
const routes: Routes = [
  {
    path:'' ,redirectTo:'login', pathMatch:'full'
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'login/register', component:RegisterComponent
  },
  {
    path:'login/header', component:HeaderContentComponent, children:contentroutes
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

