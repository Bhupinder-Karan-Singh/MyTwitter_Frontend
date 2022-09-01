import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  credentials={
    username:'',
    password:'',
    firstname:'',
    lastname:''
  }

  message!:string;

  confirm_password!:string;

  constructor(private signupService:SignupService,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  
  onSubmit(){
      if((this.credentials.username!='' && this.credentials.password!='' && this.confirm_password!='' && this.credentials.firstname!='')&&(this.credentials.username!=null && this.credentials.password!=null && this.confirm_password!=null) ){
        if(this.credentials.password != this.confirm_password){
          this.toastr.warning('Password & confirm password do not match','Message',{timeOut: 5000,});
        }else{
           console.log("request sent");
           this.signupService.registerUser(this.credentials).subscribe(response=>{
             console.log(response);
             console.log("Registration successfull");
             this.router.navigate(['/login']);
             this.toastr.success('Registration done !!! Please Login','Message',{timeOut: 5000,});
           },error=>{
            this.toastr.error('Error occured','Message',{timeOut: 5000,});
            console.log("Error occured in registration");
           });
        }
     }else{
      this.toastr.info('Marked Field(s) required','Message',{timeOut: 5000,});
      console.log("Form invalid");
    }
  }
}
