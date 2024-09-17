import { Component, HostListener, OnInit , Renderer2 } from '@angular/core';
import { MoviesService } from '../movies.service';
import { BehaviorSubject, timeInterval } from 'rxjs';

@Component({
  selector: 'app-movies2',
  templateUrl: './movies2.component.html',
  styleUrls: ['./movies2.component.css']
})
export class Movies2Component implements OnInit{
  movies2:any = []
  type:BehaviorSubject<any> = new BehaviorSubject('top_rated')
  type2 = this.type.asObservable()
  html:any 
  html2:any 
  index:BehaviorSubject<number> = new BehaviorSubject(1)
  index2 = this.index.asObservable()
  isLoading:boolean =true
  html3:any
  constructor(private movies:MoviesService){}

click(event:any){
  this.movies2 = []
  this.isLoading = true
this.index.next(1)
setTimeout(() => {
  this.isLoading = false
}, 300);

  
  this.html = event.target
  this.type.next(this.html.id);
  console.log(this.html.id);

  this.movies.gettrending(1,this.type.getValue()).subscribe({
    next:(res3)=>{
      this.isLoading = false
   this.movies2 = res3.results  
    }
  })
 console.log(event.target);
 this.html2 = document.querySelectorAll('.type')

 for (let index = 0; index < this.html2.length; index++) {
  if(this.html.id == 'top_rated'){
    this.html2[0].classList.add('activ')
    this.html2[1].classList.remove('activ')
    this.html2[2].classList.remove('activ')
    this.html2[3].classList.remove('activ')
  }
  if(this.html.id == 'popular'){
    this.html2[1].classList.add('activ')
    this.html2[0].classList.remove('activ')
    this.html2[2].classList.remove('activ')
    this.html2[3].classList.remove('activ')
  }
  if(this.html.id == 'now_playing'){
    this.html2[2].classList.add('activ')
    this.html2[1].classList.remove('activ')
    this.html2[0].classList.remove('activ')
    this.html2[3].classList.remove('activ')
  }
  if(this.html.id == 'upcoming'){
    this.html2[3].classList.add('activ')
    this.html2[1].classList.remove('activ')
    this.html2[0].classList.remove('activ')
    this.html2[2].classList.remove('activ')
  }
 }


  
}
click5(){
  this.isLoading = true
if(this.index.getValue()==1){
  this.isLoading = false
  this.index = this.index
}else{
  setTimeout(() => {
    this.isLoading = false
    this.index.next(this.index.getValue() - 1)
  }, 200);
}
}
click6(){
  console.log(this.index.getValue());
  
  this.isLoading = true
  setTimeout(() => {
    this.isLoading = false
    this.index.next(this.index.getValue() + 1)
    console.log(this.index.getValue());
  }, 200);



}
ngOnInit(): void {
this.html3 = document.querySelector('.type')
console.log(this.html3);
this.html3.classList.add('activ')
setTimeout(() => {
  this.index2.subscribe((res)=>{
    console.log(res);
  
          this.movies.gettrending(res,'top_rated').subscribe({
            next:(res3)=>{
              this.isLoading = false
           this.movies2 = res3.results  
            }
          })
      
      })
  
}, 700);

 
 
 
  
}
}
