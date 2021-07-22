import { LightningElement, api } from "lwc";

export default class DataBinding extends LightningElement {
  @api randomvalue = "Lightning Web Components!";
  message = "Welcome message from Child";

  handleChange(event){
    this.randomvalue = event.target.value;
    console.log('Value entered : ' + this.randomvalue);
  }
}
