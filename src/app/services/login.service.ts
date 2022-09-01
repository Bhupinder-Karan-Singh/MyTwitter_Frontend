import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  base_url="http://localhost:8080";
  
  constructor(private http:HttpClient,private toastr: ToastrService,private router:Router) { }

  generateToken(credentials:any){
    return this.http.post(this.base_url+"/token",credentials)
  }

  getToken(){
    return localStorage.getItem("token");
  }

  loginUser(token:any){
    localStorage.setItem("token",token)
    return true;
  }

  isLoggedIn(){
    let token = localStorage.getItem("token")
    if(token==undefined || token==null || token==''){
      return false;
    }else{
      return true;
    }
  }
  
  logout(){
    localStorage.removeItem("token")
    localStorage.clear();
    this.router.navigate(['login'])
    location.reload();

  }
}
