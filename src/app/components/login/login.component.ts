import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''

  invalidLogin=false
  errorMessage = 'invalid Credentials'


  constructor(
    private router: Router,
    private loginservice: AuthenticationService
  ) { }

  ngOnInit() {
  }

  submitData() {
    if(this.username!='' && this.password!=''){
      (this.loginservice.authenticate(this.username,this.password).subscribe(
        data=>{
          this.router.navigate(['home'])
          this.invalidLogin=false
          // this.invalidLogin1 = false
        },
        error=>{
          this.invalidLogin=true
          // this.invalidLogin1 = true
        }
      ));
    }
    else
    {
      alert("Please fill all field");
    }
    
    // console.log(this.service.executeLoginService());

    // this.service.executeLoginDataService().subscribe(
    //   response => this.handleSuccessfulResponse(response)
    // );
    // if (this.username === 'javainuse' && this.password === 'password') {
    //   this.router.navigate(['home'])
    //   this.invalidLogin1 = false
    // }
    // else
    //   this.invalidLogin1 = true
    // this.router.navigate(['login'])
  }

  // handleSuccessfulResponse(response){
  //   this.welcomeMessageFromService=response.message
  //   // console.log(response);
  //   // console.log(response.message);
  // }


}
