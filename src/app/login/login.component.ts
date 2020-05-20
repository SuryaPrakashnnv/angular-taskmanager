import { Component, OnInit } from '@angular/core';
import { LoginViewModel } from '../login-view-model';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginViewModel: LoginViewModel = new LoginViewModel();
  loginError = '';

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onLoginClick(event) {

    this.router.navigateByUrl('/dashboard');
    /*
    this.loginService.Login(this.loginViewModel).subscribe(
      (response) => {
        console.log("response : "+response);
        this.router.navigateByUrl('/dashboard');
      },
      (error) => {
        console.log("error : " +error);
        this.loginError = 'Invalid Username or password!';
      }
    );*/
  }

}
