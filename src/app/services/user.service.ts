import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import {  jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl: string = "https://ecommerce.routemisr.com/";
  token: any;
  token2: BehaviorSubject<any> = new BehaviorSubject(null);
  condit: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private _userservice: HttpClient, private _router: Router) { 
    const userData = localStorage.getItem('userdata');
    const email = localStorage.getItem('email');
    
    if (userData || email) {
      this.token = userData;
      this._router.navigate(['home']);
      this.condit.next(true);
    } else {
      this.token = null;
      this.condit.next(false);
      if (this._router.url === '/register') {
        // يمكن إضافة منطق هنا إذا لزم الأمر
      }
    }
  }

  decode() {
    const encoded = localStorage.getItem('userdata');
    if (encoded) {
      const decoded = jwtDecode(encoded);
      this.token2.next(decoded);
      localStorage.setItem('token', JSON.stringify(decoded)); // حفظ الكائن كـ JSON string
    }
  }
  
  loginout() {
    localStorage.removeItem('userdata');
    localStorage.removeItem('email');
    this.token = null;
    this.condit.next(false);
    this._router.navigate(['/login']);
  }

  getdata(data: object): Observable<any> {
    return this._userservice.post(this.baseurl + "api/v1/auth/signup", data);
  }

  sentdata(data: object): Observable<any> {
    return this._userservice.post(this.baseurl + "api/v1/auth/signin", data);
  }
}
