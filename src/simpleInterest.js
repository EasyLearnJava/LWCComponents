import { LightningElement, api } from "lwc";

export default class SimpleInterest extends LightningElement {
  principalAmount;
  termInYears;
  interestRate;

  @api calculateSI(principalAmount, termInYears, interestRate){
    return (principalAmount*termInYears*interestRate)/100;
  }
  
}