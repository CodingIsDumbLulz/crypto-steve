import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';

import { ProfitCalculatorComponent } from './profit-calculator/profit-calculator.component';
import { ProfitsCalculatorService } from './profits-calculator.service';
import { StringifyPipe } from './stringify.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatListModule
  ],
  declarations: [
    ProfitCalculatorComponent,
    StringifyPipe
  ],
  exports: [
    ProfitCalculatorComponent
  ],
  providers: [
    ProfitsCalculatorService
  ]
})
export class ToolsModule { }
