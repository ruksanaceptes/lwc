import { LightningElement } from 'lwc';

export default class LifeCycleHooksExample extends LightningElement {
  //  name;
  displayChild=false;

    constructor(){
        super();
        console.log("inside the constructor");
    }
    connectedCallback(){
        
        console.log("inside the callback");
    }
    renderedCallback(){
        
        console.log("inside the rendered callback");
    }
    handleClick()
    {
        this.displayChild= !this.displayChild;
    }

   /* changeHandler(event){
        this.name=event.target.value;
    }*/
 /*  errorCallback(error,stack){
        console.log(error.message)
        console.log(stack)
    }*/
}