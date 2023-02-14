import { STRING_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';

  imgUrl="../assets/image.jpg";
  bridgelabzLogo="https://www.bridgelabz.com/assets/images/BridgeLabz%20New%20Logo.svg";
  
  ngOnInit(): void{
    this.title="Hello from bridgelabz"

  
  }
}
