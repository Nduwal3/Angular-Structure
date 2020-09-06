import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../interface/user.interface';
import { environment } from '../../../../environments/environment';
import { KILROYCONSTANT, AUTHCONSTANTS } from '../constants';

const BASE_URL = environment.base_url;
const ACCESS_TOKEN = environment.access_token;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // protected httpOptions = {

  //   headers: new HttpHeaders().set(
  //     'Content-Type',
  //     'application/x-www-form-urlencoded'
  //   ),
  // };

  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/JSON',
    }),
  };

  Register(user): Observable<UserInterface> {
    return this.http.post<UserInterface>(
      BASE_URL + KILROYCONSTANT.signupUrl,
      JSON.stringify(user),
      this.httpOptions
    );
    // .pipe(
    //   retry(1),
    //   catchError(console.error(Error))
    //   )
    // )
  }

  login(user): Observable<UserInterface> {
    let val = JSON.stringify(user);
    return this.http.post<UserInterface>(
      BASE_URL + KILROYCONSTANT.loginurl,
      val,
      this.httpOptions
    );
  }

  setToken(token: string) {
    localStorage.setItem(AUTHCONSTANTS.ACCESS_TOKEN, token);
  }

  get getToken() {
    return AUTHCONSTANTS.ACCESS_TOKEN;
  }

  isLoggedIn(): boolean {
    return AUTHCONSTANTS.ACCESS_TOKEN ? true : false;
  }
}
