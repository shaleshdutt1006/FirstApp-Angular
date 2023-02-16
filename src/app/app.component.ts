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
 firstNameError: string="";
 lastNameError: string="";
 companyNameError: string="";
 firstName: string="";
  lastName: string="";
 companyName: string="";

 //Method to apply regex on the input userName
 onInput($event:any){
  console.log("Change event occured",$event.data)
  const NameRegex=RegExp('^[A-Z]{1}[a-z]{2,}');  
if(NameRegex.test(this.firstName))
{
  this.firstNameError="";
  return;
} else {this.firstNameError=" First Name is Incorrect!" 
}
  if (NameRegex.test(this.lastName)) {
  this.lastNameError="";
 return;
}else {   
  this.lastNameError=" Last Name is Incorrect!"
}  
  if (NameRegex.test(this.companyName)) {
  this.companyNameError="";
  return;
 }else{ 
    this.companyNameError=" Company Name is Incorrect!" 
}
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
