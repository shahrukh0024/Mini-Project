import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from '@angular/router';
import { TEmp } from '../types/types_emp';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input('emp') emp:TEmp;
  @Output() public empDelete: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {}
  
  handleDelete()
  {
    this.empDelete.emit(this.emp.id);
  }

}
