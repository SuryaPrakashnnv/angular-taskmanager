import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { LoginViewModel } from './login-view-model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // in order to redirect the interceptor we have make httpClient as a variable
  // not injected in constructor
  private httpClient: HttpClient;

  // this injection for using interceptor
  // constructor(private httpClient: HttpClient) { }

  // in order to redirect the interceptor
  constructor(private httpBackend: HttpBackend,
              private jwtHelperService: JwtHelperService) { }

  currentUserName = 'Surya';

  public Login(loginViewModel: LoginViewModel): Observable<any> {
    this.httpClient = new HttpClient(this.httpBackend);
    return this.httpClient.post<any>('/authenticate', LoginViewModel, { responseType: 'json' })
                .pipe(map(user => {
                  if (user) {
                    this.currentUserName = user.userName;
                    console.log(this.currentUserName);
                    // this.currentUserName = this.currentUserName;
                    sessionStorage.currentUser = JSON.stringify(user);

                  }
                  return user;
                }));
  }

  public Logout() {
    sessionStorage.removeItem('currentUser');
    this.currentUserName = null;

  }
  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem('currentUser') ? JSON.parse(sessionStorage.getItem('currentUser')).token : null;
    if (this.jwtHelperService.isTokenExpired()) {
      // Token is not valid
      return false;
    } else {
      // Token is valid
      return true;
    }
  }
}
