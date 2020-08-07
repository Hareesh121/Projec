// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TlistComponent } from './tlist/tlist.component';
import { TAddComponent } from './t-add/t-add.component';
import { NgModule } from '@angular/core';
import { TEditComponent } from './t-edit/t-edit.component';
import { BookComponent } from './book/book.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { HomeComponent } from './home/home.component';
import {AuthGuard} from './auth.guard';
import { STlistComponent } from './s-tlist/s-tlist.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [{path:"",component:AdminComponent},{path:"List",component:TlistComponent},
{path:"add",component:TAddComponent ,canActivate:[AuthGuard]},
{path:"edit/:id",component:TEditComponent},
{path:"book/:id",component:BookComponent},
{path:"login",component:LoginComponent},
{path:"SignUp",component:RegisterComponent},
{path:"Single/:id",component:STlistComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
