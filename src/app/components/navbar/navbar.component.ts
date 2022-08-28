import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn=false;
  user!:any;

  constructor(private loginService:LoginService,private userService:UserService,private router:Router) { }

  ngOnInit(): void {

    this.loggedIn = this.loginService.isLoggedIn()

    this.userService.getUser().subscribe(res=>{
        this.user = res;
        console.log("user:",res);
      },error=>{
      console.log(error);
      });
      
      if(this.loggedIn){
        this.router.navigate(['/dashboard']);
      }
  }
  logoutUser(){
    this.loginService.logout()
    location.reload();
  }
  loginForm(){
    this.router.navigate(['/login']);
  }
  indexPage(){
    this.router.navigate(['/']);
  }
}
