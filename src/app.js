import { LightningElement, track } from "lwc";

export default class App extends LightningElement {
  title = "You Need ToDo";

   @track todo; 
    @track todoArray = [];  

    handleClick(){
        const todoObj = {
            aa: null,
            bb: 'raghu'
        }
        todoObj.aa = Math.round(Math.random() * 100)
        todoObj.bb = this.todo;

        this.todoArray.unshift(todoObj);
        //this.todoArray.forEach(element => console.log(element));
        this.todoArray.forEach((element, index, array) => {
    console.log(element.aa); // 100, 200, 300
    console.log(index); // 0, 1, 2
    console.log(array); // same myArray object 3 times
});
    }

    handleChange(event){
        this.todo = event.target.value;
    }

    areDetailsVisible = false;
    handleChange(event) {
        this.areDetailsVisible = event.target.checked;
    }
    ceoList = [
          {
            Id: 1,
            Name: 'Marc Benioff',
            Company: 'Salesforce.com',
        },
        {
            Id: 2,
            Name: 'Sundar Pichai',
            Company: 'Google',
        },
      
        {
            Id: 3,
            Name: 'Elon Musk',
            Company: 'Telsa',
        },
    ];
}
