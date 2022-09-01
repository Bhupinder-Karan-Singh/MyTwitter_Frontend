import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user!:any;

  constructor(private userService:UserService) {
   }

  ngOnInit(): void {
      this.userService.getUser().subscribe(
        res=>{
          this.user = res;
        },
        error=>{
  console.log(error);
        });
    }
  
}
