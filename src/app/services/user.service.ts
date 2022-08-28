import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  base_url="http://localhost:8080"

  constructor(private http:HttpClient) { 
  }

  getUser(){
    return this.http.get(this.base_url+"/getUsers")
  }
}
