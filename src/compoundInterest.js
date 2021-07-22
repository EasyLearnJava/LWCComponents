import { LightningElement, api } from "lwc";

export default class CompoundInterest extends LightningElement {
  principalAmount;
  termInYears;
  interestRate;

  @api calculateCI(principalAmount, termInYears, interestRate){
    return principalAmount* (Math.pow(1+(interestRate/12), 12*termInYears));
  }
}