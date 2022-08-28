import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    username:'',
    password:''
  }


  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if((this.credentials.username!='' && this.credentials.password!='')&&(this.credentials.username!=null && this.credentials.password!=null)){
      console.log("form submitted");
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{
        console.log(response.token);
        this.loginService.isLoggedIn();
        this.loginService.loginUser(response.token);
        this.router.navigate(['/dashboard']);
        location.reload();
      },
      error=>{
       console.log("Server error");
       console.log(error);
      })
    }else{
      console.log("form is empty");
    }
  }
}
