import { Component, inject } from '@angular/core';
import { InvestmentService } from '../investement.service';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css',
})
export class OutputComponent {
  investmentService = inject(InvestmentService);
  // annualData = this.investmentService.annualData;
  // constructor(){
  //   console.log(this.annualData.length)
  // }
}
