import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
private _registerUrl="http://localhost:3000/register"
 private _loginUrl="http://localhost:3000/login"
constructor(private http:HttpClient) { }


registerUser(user)
{
return this.http.post<any>(this._registerUrl,user)
}

loginUser(user)
{
return this.http.post<any>(this._loginUrl,user)
}
loggedIn() 
{
  if(localStorage.getItem('token')=="user")
  {
    return true
  }
  else if(localStorage.getItem('token')=="admin")
  {
    return true
  }

  else {return false}
}
loggedinUser() 
{
  if(localStorage.getItem('token')=="user")
  {
    return true
  }
  else {return false}
}
loggedinAdmin()
{
  if(localStorage.getItem('token')=="admin")
  {
    return true
  }
  else {return false}
}

}
