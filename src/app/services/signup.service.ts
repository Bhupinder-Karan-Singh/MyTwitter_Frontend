import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  base_url="http://localhost:8080";

  constructor(private http:HttpClient) { }

  registerUser(credentials:any){
    return this.http.post(this.base_url+"/signup",credentials)
  }
}
