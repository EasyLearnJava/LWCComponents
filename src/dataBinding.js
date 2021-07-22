import { LightningElement } from "lwc";

export default class DataBinding extends LightningElement {
  randomValue = "Lightning Web Components!";

  handleChange(event){
    this.randomValue = event.target.value;
    console.log('Value entered : ' + this.randomValue);
  }
}
