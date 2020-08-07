import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerUserData= <any>{}
  constructor(private _auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  registerUser(){
    console.log(this.registerUserData)
this._auth.registerUser(this.registerUserData)
.subscribe(
  res=>{
    console.log(res["token"])
   localStorage.setItem('token',res["token"])
    console.log("the role is below displayed ")
    console.log(localStorage.getItem('token'))
    this.router.navigate(['/List'])
    },
  err=>console.log(err)
)
  }

}
