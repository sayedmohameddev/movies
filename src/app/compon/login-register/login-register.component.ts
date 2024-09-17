import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LoaderService } from 'src/app/loader.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit{
 constructor(private loader:LoaderService){}
 ngOnInit(): void {
   this.loader.navisloader.next(false)
 }
}
