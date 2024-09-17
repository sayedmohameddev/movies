import { CUSTOM_ELEMENTS_SCHEMA, Component, HostListener, NO_ERRORS_SCHEMA } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { ActivatedRoute, Router } from '@angular/router';
import $ from 'jquery';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MoviesService } from '../movies.service';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { TrendingService } from '../trending.service';
import { UserService } from '../services/user.service';
import { SearchService } from '../search.service';
import { LoaderService } from '../loader.service';
import { BehaviorSubject } from 'rxjs';
// register Swiper custom elements
register();
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

  
})
export class NavbarComponent {
 img:string[]=['../../assets/honest-thief.jpg','../../assets/morbius-poster-1.jpg','../../assets/train-to-busan-hero-apr-2021.jpg']
  erorr:string = ""
  ooh:boolean = false
  show:boolean = true
  id:any;
  nav:any 
  importantid:any
  success:any
  email:BehaviorSubject<any>=new BehaviorSubject(null)
  res34:any
  
 public search2:any =[]
public  searchsure:boolean=false
  @HostListener('document:scroll') scrollover(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.nav = {
        "background-color" : '#000000'
      }

    }else{
      this.nav = {
        
      }
    }
  
    
  }
  constructor(public x:UserService , private _router:Router ,public z:SearchService , private router:ActivatedRoute ,public loader:LoaderService){
   x.condit.asObservable().subscribe((res)=>{
    this.res34 = res
    console.log(this.res34);
    console.log(this.email);
    if( this.email.getValue()=== null){
      x.token = null
    }
   })
   this.email.next(localStorage.getItem('email'))
 console.log(x.token);
 
  }
  search(event:any){

    this._router.navigate([`/search/${event.target.value}`] )
    
    }
      
  register:FormGroup = new FormGroup ({
  name:new FormControl(null , [Validators.required , Validators.minLength(3),Validators.maxLength(10),Validators.pattern(/^[A-Za-z]+$/)]),
  lastname:new FormControl(null , [Validators.required , Validators.minLength(3),Validators.maxLength(10),Validators.pattern(/^[A-Za-z]+$/)]),
  email:new FormControl(null , [Validators.required,Validators.email]),
  password:new FormControl(null , [Validators.required ,Validators.pattern(/^(?=.*?[0-9]).{8,}$/)]),
  rePassword:new FormControl(null , [Validators.required,Validators.pattern(/^(?=.*?[0-9]).{8,}$/)]),
  age:new FormControl(null , [Validators.required , Validators.pattern(/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/)])
  },{validators : this.passordmatch})
  passordmatch(register:any){
  let password =  register.get('password');
  let repassword =  register.get('rePassword');
  if(password.value === repassword.value){
  return null
  }
  else{
  repassword?.setErrors({passwordmatch: 'password and repassword not match'})
  return  {passordmatch : 'password and repassword not match'}
  }
  }
  formmm(registerr:FormGroup){
    this.ooh = true
   console.log(registerr);
   
    
    this.x.getdata(registerr.value).subscribe({
     
      next:(data)=>{if(data.message == 'success'){
        console.log(data);
        this._router.navigate(['/home'])
        localStorage.setItem('email',data.user.email)
        this.x.token = localStorage.getItem('email')
        this.success = data.message
        $('#close').click()
        this.email.next(localStorage.getItem('email'))
        this.ooh=false
      }
      },
  error:(dataa)=>{console.log(dataa);
  this.x.token = null
    this.erorr = dataa.error.message
    this.ooh=false}
  });
   
    
  }
  login:FormGroup = new FormGroup ({
    email:new FormControl(null , [Validators.required,Validators.email]),
    password:new FormControl(null , [Validators.required,Validators.pattern(/^(?=.*?[0-9]).{8,}$/)]),
  })
  gotoregister(){
   // this._router.navigate(['./register'])
  }
  formmmm(login:FormGroup){
    
    
    this.ooh = true
    this.x.sentdata(login.value).subscribe({
      next:(data)=>{if(data.message == 'success'){
        console.log(data);
        
        localStorage.setItem('userdata',data.token)
        this.id = jwtDecode(data.token)
        console.log(this.id);
        this.importantid = this.id.id
        localStorage.setItem('id',this.importantid)
        console.log(this.importantid);
        
        this.x.token = localStorage.getItem('userdata')
        console.log(this.x.token );
        $('#close2').click()
        this.ooh=false
        this._router.navigate(['/home'])
      }
      },
  error:(dataa)=>{
  console.log(dataa);
  
    this.erorr = dataa.error.errors.msg

    
    this.ooh=false}
  });
   
  }
  loginout(){
    localStorage.removeItem('userdata');
  
  //  this._router.navigate(['/login'])
  }
  
}
  
  
  

