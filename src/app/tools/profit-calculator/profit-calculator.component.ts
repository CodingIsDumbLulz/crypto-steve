import { Component, OnInit, ViewChild } from '@angular/core';
import { Inputs } from '../models/inputs';

@Component({
  selector: 'app-profit-calculator',
  templateUrl: './profit-calculator.component.html',
  styleUrls: ['./profit-calculator.component.scss']
})
export class ProfitCalculatorComponent implements OnInit {

  model = new Inputs(0,0,0,0,0,0);

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model);
  }
}
