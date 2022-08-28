import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  base_url="http://localhost:8080"

  constructor(private http:HttpClient) { }

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
    return true;
  }

}
