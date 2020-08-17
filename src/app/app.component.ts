import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoApp';
  item="";
  lists: any[] =[];
  constructor( ) { }

 

 removeItem(idx){
   this.lists.splice(idx,1);
 }

   trackByFn(index, item) {
    return index; // or item.id
  }
alert;
 addToList(item){
  
   this.item=item;
    if(item['todo']=="" || item['todo']==null){
      this.alert="Please add something to list..."
      setTimeout(() => {
        this.alert=""
      }, 3000);
    }else if(this.lists.some(i=>
      i['todo']==item['todo']
    )){
    
        this.alert="You already have same task..."
        setTimeout(() => {
          this.alert=""
        }, 3000);
      
    }else{
      this.lists.push(item);

    }
   console.log(this.lists);
   
 }


}
