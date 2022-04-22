import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TEmp } from '../types/types_emp';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input('emp') emp:TEmp;
  constructor() { }

  ngOnInit(): void {
  }

}
