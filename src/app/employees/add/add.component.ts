import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  empAddForm: FormGroup;
  constructor() { }

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
  onSubmit()
  { 
    event.preventDefault();
    console.log(this.empAddForm);
    this.empAddForm.reset();
  }

}
