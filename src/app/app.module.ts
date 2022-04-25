import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { EmployeesComponent } from './employees/employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddComponent } from './employees/add/add.component';
import { EditComponent } from './employees/edit/edit.component';
import { DetailsComponent } from './employees/details/details.component';
import { EmployeesService } from './employees/employees.service';
import { DetailsempComponent } from './employees/employee/detailsemp/detailsemp.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    EmployeesComponent,
    EmployeeComponent,
    AboutUsComponent,
    AddComponent,
    EditComponent,
    DetailsComponent,
    DetailsempComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
