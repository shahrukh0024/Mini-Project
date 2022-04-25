import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { TEmp } from '../types/types_emp';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  emp: TEmp;
  constructor(private _empService: EmployeesService) { }

  ngOnInit(): void {}
  onFullDetails(detail: TEmp)
  {
    this.emp = detail;
    console.log(this.emp);
  }

}
