import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User{
  constructor(
    public status:string,
    
  ){}
}
export class Any{
constructor(
  public username:string,
  public password:string
){}

}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }
  any:Any
  


  authenticate(username,password){
    // const headers=new HttpHeaders({Authorization:'Basic'+btoa(username+':'+password)});
    return this.httpClient.post<any>('http://localhost:8089/authenticate',{username,password}).pipe(
      map(
        userData=>{
          sessionStorage.setItem('username',username);
          let tokenStr='Bearer '+userData.token;
          sessionStorage.setItem('token',tokenStr);
          return userData;
        }
      )
    );
  }

  isUserLoggedIn(){
    let user=sessionStorage.getItem('username')
    // console.log(!(user===null))
    return !(user===null)
  }

  
}
