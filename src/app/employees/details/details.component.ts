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
  editMode:any = true;
  constructor(
    private _empService: EmployeesService,
    private activeRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    // this.activeRoute.params.subscribe((params) => 
    //  {
    //      const productId = params.id;
    //      this._empService.fetchSingleEmployee(+productId).subscribe((data) => {
    //      this.item = data;
    //   });
    // });

      this.activeRoute.paramMap.subscribe(param=> {
      this.item = this._empService.fetchAnEmp(+param.get('id')-1);
    })
    this.activeRoute.queryParamMap.subscribe(qParam=>{
      this.editMode=qParam.get('editMode');
    })

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