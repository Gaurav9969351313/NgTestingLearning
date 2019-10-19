import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  saveToken() {
    localStorage.setItem('token','1234')
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
