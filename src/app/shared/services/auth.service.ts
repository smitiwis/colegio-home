import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private htppClient: HttpClient) { }

  login(login: any): Observable<any> {
    return this.htppClient.post('http://localhost:3000/login', login);
  }

}
