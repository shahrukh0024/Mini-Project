import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../employees.service';
import { TEmp } from '../types/types_emp';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  emp: TEmp;
  constructor(
    private _empService: EmployeesService,
    private activeRoute: ActivatedRoute  
    ) { }

  ngOnInit(): void {
      this.activeRoute.paramMap.subscribe(res=>{
      console.log(res);
    })
    this._empService.fetchSingleEmployee(2);

  }
  onFullDetails(detail: TEmp)
  {
    this.emp = detail;
    console.log(this.emp);
  }

}
