import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/service/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  username = ''
  password = ''
  cpassword = ''

  constructor(
    private router: Router,
    private registerservice: RegistrationService 
  ) { }

  ngOnInit() {
  }

  Login() {
    this.router.navigate(['login'])
  }

  validatePass() {
    if(this.username!='' && this.password!=''){
      var passw = /^[A-Za-z]\w{7,14}$/;
      if (this.password.match(passw)) {
        return true;
      }
      else {
        return false;
      }
    }else{
      alert("Please fill all field");
    }
    
  }

  submitData() {
    if (this.validatePass()) {
      if (this.password == this.cpassword) {
        (this.registerservice.register(this.username, this.password).subscribe(
          data => {
            alert("You Register Successfully!!");
            this.router.navigate(['login'])
            // this.invalidLogin=false
          },
          error => {
            // this.invalidLogin=true
          }
        ));
      } else {
        alert("Password not matching\nPlease try again");
      }
    } else {
      alert("Password should contain 7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter")
    }
  }

}
