import { LightningElement } from 'lwc';

export default class LifeCycleDisconnectedCallback extends LightningElement {

    constructor(){
        super();
        console.log("inside the child constructor");
    }
    connectedCallback(){
        
        console.log("inside the  child callback");
      //  throw new Error('Loading of child component failed');
    }
    renderedCallback(){
        
        console.log("inside the child rendered callback");
    }
    disconnectedCallback(){
        
        alert("inside the child disconnected callback called");
    }
}