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
  url="https://www.bridgelabz.com/"
  userName: string="";

  
  ngOnInit(): void{
    this.title="Hello from bridgelabz"  
    }

  onClick($event:any){
    console.log("Button is clicked",$event);
    window.open(this.url,"blank");
  }

  showUrl($event:any){
    console.log(this.imgUrl)
    alert("Image Is located in "+ this.imgUrl)
  }
 
}
