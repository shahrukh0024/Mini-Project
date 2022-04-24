import { Component, OnInit } from '@angular/core';
import { TEmp } from '../types/types_emp';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  emp: TEmp;
  constructor() { }

  ngOnInit(): void {}
  onFullDetails(detail: TEmp)
  {
    this.emp = detail;
    console.log(this.emp);
  }

}
