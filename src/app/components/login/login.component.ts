import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService } from 'ngx-toastr';

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


  constructor(private loginService:LoginService,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    if(this.loginService.isLoggedIn()){
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit(){
    if((this.credentials.username!='' && this.credentials.password!='')&&(this.credentials.username!=null && this.credentials.password!=null)){
      console.log("form submitted");
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{
          if(response){
            this.loginService.isLoggedIn();
            this.loginService.loginUser(response.token);
            this.router.navigate(['/dashboard']);
            location.reload();
          }else if(!response){
            this.toastr.error('Invalid credentials','Message');
          }
      },
      (error:any)=>{
        this.toastr.error('Bad credentials or Internal Server Error','Message');
       console.log(error);
      })
    }else{
      this.toastr.error('Invalid inputs','Message');
    }
  }
}
