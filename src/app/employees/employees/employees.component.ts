import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../employees.service';
import { TEmp } from '../types/types_emp';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  display: boolean = true;
  
  emps:TEmp[] = [];
 
  constructor(
    private _empService : EmployeesService,
    private activeRoute : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.emps = this._empService.emps;
  }
  
  handleEmpDelete(id : number)
  {
    console.log(id);
    this.emps = this.emps.filter((emp) => emp.id !== id);
  }
  addEmp(emp:TEmp)
  {
    console.log(emp);
    this._empService.emps.unshift(emp);
  }
}
