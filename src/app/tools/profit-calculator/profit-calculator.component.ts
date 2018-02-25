import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatListOption } from '@angular/material/list';

@Component({
  selector: 'app-profit-calculator',
  templateUrl: './profit-calculator.component.html',
  styleUrls: ['./profit-calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ProfitCalculatorComponent implements OnInit {
  @ViewChild('calcInputs') calcInputsList: {
    selectedOptions: {
      selected: SelectionModel<MatListOption>
    }
  };

  constructor() { }

  ngOnInit() {
  }
}
