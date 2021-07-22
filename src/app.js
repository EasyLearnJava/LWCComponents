import { LightningElement } from "lwc";

export default class App extends LightningElement {
  randomValue = "Lightning Web Components!";

  handleUpdate(event){
    this.randomValue = event.target.value;
    console.log('Value entered : ' + this.randomValue);
  }
}
