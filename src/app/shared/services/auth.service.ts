import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlDatosAuth: string = "http://localhost:3000/login"

  constructor(private htppClient: HttpClient) { }

  login(login: any): Observable<any> {
    return this.htppClient.post(this.urlDatosAuth, login);
  }

}
