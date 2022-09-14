import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:"",component:HomeComponent, pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"search",component:SearchComponent,canActivate:[AuthGuard]},
  {path:"signup",component:SignupComponent},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
