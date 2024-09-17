import { Component , OnInit } from '@angular/core';
import { BehaviorSubject, timeInterval } from 'rxjs';
import { DiscoverService } from '../discover.service';

@Component({
  selector: 'app-discovertv',
  templateUrl: './discovertv.component.html',
  styleUrls: ['./discovertv.component.css']
})
export class DiscovertvComponent {
  movies2:any = []
  isLoading:boolean =true
  index:BehaviorSubject<number> = new BehaviorSubject(1)
  index2 = this.index.asObservable()
  color:any
constructor(private discover:DiscoverService){


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
select(event:any){
console.log(event.target.id);
this.discover.getdiscovertv(5,event.target.id).subscribe({
  next:(res)=>{
    console.log(res.results);
    this.isLoading = false
    this.movies2 = res.results
    
  } 
})
}
select2(event:any){
  console.log(event.target.id);
  this.discover.getdiscovertv(1,'popularity.desc',event.target.id).subscribe({
    next:(res)=>{
      console.log(res.results);
      this.isLoading = false
      this.movies2 = res.results
      
    } 
  })
  }
  select3(event:any){
    console.log(event.target.value);
    this.discover.getdiscovertv(1,'popularity.desc',35,event.target.value).subscribe({
      next:(res)=>{
        console.log(res.results);
        this.isLoading = false
        this.movies2 = res.results
        
      } 
    })
    }
    select4(){
      this.discover.getdiscovertv(1,'popularity.desc').subscribe({
        next:(res)=>{
          this.movies2 = res.results
          this.isLoading = false
        } 
      })
    }
ngOnInit(): void {
  this.index2.subscribe((res)=>{
    console.log(res);
  this.discover.getdiscovertv(res,'popularity.desc').subscribe({
    next:(res)=>{
      this.movies2 = res.results
      this.isLoading = false
      for (const item of res.results) {
        
        if(item.vote_average > 6){
this.color = 'rgb(173, 255, 47)'
console.log("7");

        }
        if(item.vote_average > 3){
          this.color = 'rgb(255, 215, 0)'
          console.log("3");
        }
        if(item.vote_average < 3){
          this.color = 'rgb(255, 0, 0);'
          console.log("1");
        }
      }
    
    } 
  })
})
}
}

