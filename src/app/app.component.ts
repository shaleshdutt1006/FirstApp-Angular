 import { STRING_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  imgUrlSource="../assets/image.jpg";
  bridgelabzLogoSource="https://www.bridgelabz.com/assets/images/BridgeLabz%20New%20Logo.svg";
  url="https://www.bridgelabz.com/"

  userName: string="";
 nameError: string="";

 //Method to apply regex on the input userName
onInput($event:any){
  console.log("Change event occured",$event.data)
  const nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}');
if(nameRegex.test(this.userName))
{
  this.nameError="";
  return;
}
this.nameError="Name is Incorrect!"
}

  ngOnInit(): void{
    this.title="Hello from bridgelabz"  
    }

  onClick($event:any){
    console.log("Button is clicked",$event);
    window.open(this.url,"blank");
  }

  showUrl($event:any){
    console.log(this.imgUrlSource)
    alert("Image Is located in "+ this.imgUrlSource)
  } 
}
