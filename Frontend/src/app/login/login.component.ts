import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
LoginUserData=<any>{}
  constructor(private _auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
Login()
{
  console.log(this.LoginUserData)
  this._auth.loginUser(this.LoginUserData).subscribe(
    res=> {
      console.log(res["token"])
     localStorage.setItem('token',res["token"])
      console.log("the role is below displayed ")
      console.log(localStorage.getItem('token'))
      this.router.navigate(['/List'])
      },
    err=>
    {
      if(err){
        alert("Check the entered credentials !!! ")
      }
    }
  )
    }
}
