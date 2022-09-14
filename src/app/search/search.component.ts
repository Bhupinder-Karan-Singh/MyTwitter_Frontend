import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search!:'';
  userList:any=[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  onKeypressEvent(event: any){
  this.userService.getUsers(this.search).subscribe(res=>{
    if(res){
      this.userList=res;
      console.log("response got", res);
    }else{
      console.log("No response");
    }
  });
 }

 addFriend(username:string){
   alert(username);
 }
}
