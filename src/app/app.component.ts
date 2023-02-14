import { STRING_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';

  Website='www.bridgelabz.com';
  data=100;
//The ngOnInit function is specific to the Angular framework and is called when Angular is done creating the component. 
//It should be called with any custom finalization like loading data for your component to display.

  ngOnInit(): void{
    this.title="Hello from bridgelabz"

  
  }
}
