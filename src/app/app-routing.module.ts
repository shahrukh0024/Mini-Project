import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeesComponent } from './employees/employees/employees.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddComponent } from './employees/add/add.component';
import { DetailsComponent } from './employees/details/details.component';
import { EditComponent } from './employees/edit/edit.component';

const routes: Routes = [
  {
    path:'',
    component: LandingComponent,
    pathMatch: 'full'
  },
  {
    path:'employees',
    component: EmployeesComponent,
  },
  {
    path:'aboutUs',
    component: AboutUsComponent,
  },
  {
    path:'employees/add',
    component: AddComponent,
  },
  {
    path:'employees/details/:id',
    component: DetailsComponent,
  },
  {
    path:'edit/:id',
    component: EditComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
