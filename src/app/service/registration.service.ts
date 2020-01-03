import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class Any{
  constructor(
    public username:string,
    public password:string
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(
    private httpClient:HttpClient
  ) { }

  any:Any;
 
  register(username,password){
    // const headers=new HttpHeaders({Authorization:'Basic'+btoa(username+':'+password)});
    return this.httpClient.post<any>('http://localhost:8089/register',{username,password}).pipe(
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
}
