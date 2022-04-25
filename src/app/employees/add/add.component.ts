import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeesService } from '../employees.service';
import { TEmp } from '../types/types_emp';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  empAddForm: FormGroup;
  employeeInfo:TEmp;
  constructor(private _empService: EmployeesService,private router: Router) { }

  ngOnInit(): void {
    this.empAddForm = new FormGroup({
      EmpDetails: new FormGroup({
        username: new FormControl(null,Validators.required),
        name: new FormControl(null,Validators.required),
        email: new FormControl(null,[Validators.required,Validators.email]),
        gender: new FormControl(null,Validators.required),
        designation: new FormControl(null,Validators.required),
        phone_number: new FormControl(null,Validators.required),
        complete_address: new FormControl(null,Validators.required),
      }) 
    });
  }
  
  @Output() public empForm: EventEmitter <FormGroup> = new EventEmitter();
  onSubmit()
  { 
    this._empService.addEmployee(this.empAddForm.value.EmpDetails);
    this.router.navigate(['employees']);
    this.empAddForm.reset();
  }

}
