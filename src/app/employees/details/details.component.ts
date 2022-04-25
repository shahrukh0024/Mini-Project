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
  item:TEmp;
  constructor(
    private _empService: EmployeesService,
    private activeRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      const productId = params.id;
      this._empService.fetchSingleEmployee(+productId).subscribe((data) => {
        this.item = data;
      });
    });
  }
  
// onFullDetails(detail: TEmp) {
//   this.emp = detail;
//   console.log(this.emp);
// }
// 
//   
//   
//     console.log(res)
//   
}