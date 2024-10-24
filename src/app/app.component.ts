import { Component } from '@angular/core';
import type {
  InvestmentInput,
  InvestmentResult,
} from './user-input/user-input.model';

@Component({
  selector: 'app-root',
  // standalone: true,
  templateUrl: './app.component.html',
  // imports: [HeaderComponent, UserInputComponent, OutputComponent],
})
export class AppComponent {
  result?: InvestmentResult[];
  onCalculateInvestmentResults(data: InvestmentInput) {
    const { annualInvestment, duration, expectedReturn, initialInvestment } =
      data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.result = annualData;
  }
}
