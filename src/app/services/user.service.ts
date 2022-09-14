import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  base_url="http://localhost:8080";
  headers!: any;

  constructor(private http:HttpClient,private loginservice:LoginService) { 
      this.headers = {
        'idToken' : localStorage.getItem('token')
      }    
  }

  getUser(){
    return this.http.get(this.base_url+"/getUsers",{params: this.headers})
  }
  
  getUsers(search:any){
    console.log("search sent",search);
    return this.http.get(this.base_url+"/search/"+search,{params: this.headers})
  }
}
