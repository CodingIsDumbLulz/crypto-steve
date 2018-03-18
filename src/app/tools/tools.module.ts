import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfitCalculatorComponent } from './profit-calculator/profit-calculator.component';
import { ProfitsCalculatorService } from './profits-calculator.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProfitCalculatorComponent
  ],
  exports: [
    ProfitCalculatorComponent
  ],
  providers: [
    ProfitsCalculatorService
  ]
})
export class ToolsModule { }
