import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { UpdateComponent } from './update/update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomPipe } from '../custom.pipe';

console.log("Employee module loaded.......")
@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    UpdateComponent,
    CustomPipe
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,ReactiveFormsModule
  ]
})
export class EmployeeModule { }
