import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  private initialInvestment = signal(0);
  private annualInvestment = signal(0);
  private expectedReturn = signal(0);
  private duration = signal(0);

  setInvestmentData(
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number
  ) {
    this.initialInvestment.set(initialInvestment);
    this.annualInvestment.set(annualInvestment);
    this.expectedReturn.set(expectedReturn);
    this.duration.set(duration);
  }

  get annualData() {
    const annualData = [];
    let investmentValue = this.initialInvestment();

    for (let i = 0; i < this.duration(); i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (this.expectedReturn() / 100);
      investmentValue += interestEarnedInYear + this.annualInvestment();
      const totalInterest =
        investmentValue -
        this.annualInvestment() * year -
        this.initialInvestment();
      annualData.push({
        year: year,
        interest: interestEarnedInYear.toFixed(2),
        valueEndOfYear: investmentValue.toFixed(2),
        annualInvestment: this.annualInvestment().toFixed(2),
        totalInterest: totalInterest.toFixed(2),
        totalAmountInvested:
          (this.initialInvestment() + this.annualInvestment() * year).toFixed(2),
      });
    }

    return annualData;
  }
}
