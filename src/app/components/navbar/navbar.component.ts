import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { delay, Observable } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn=false;
  user:any="";

  constructor(public loginService:LoginService,private userService:UserService,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {

    
    this.loggedIn = this.loginService.isLoggedIn()

    this.userService.getUser().subscribe(res=>{
        this.user = res;
        console.log(res);
        console.log(this.user);
      },error=>{
       console.log(error);
      });
      
      if(this.loggedIn){
        this.router.navigate(['/dashboard']);
      }
  }
  logoutUser(){
    this.loginService.logout()
  }

  loginForm(){
    this.router.navigate(['/login']);
  }
  signUpForm(){
    this.router.navigate(['/signup']);
  }
  indexPage(){
    this.router.navigate(['/']);
  }
}
