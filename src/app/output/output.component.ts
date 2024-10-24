import { Component, input } from '@angular/core';
import { InvestmentResult } from '../user-input/user-input.model';


@Component({
  selector: 'app-output',
  // standalone: true,
  // imports: [CurrencyPipe],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css',
})
export class OutputComponent {
  investmentResult = input<InvestmentResult[]>();
  // investmentService = inject(InvestmentService);
  // annualData = this.investmentService.annualData;
  // constructor(){
  //   console.log(this.annualData.length)
  // }
}
