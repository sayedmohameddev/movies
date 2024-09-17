import { Component , OnInit } from '@angular/core';
import { BehaviorSubject, timeInterval } from 'rxjs';
import { DiscoverService } from '../discover.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit{
  movies2:any = []
  isLoading:boolean =true
  index:BehaviorSubject<number> = new BehaviorSubject(1)
  index2 = this.index.asObservable()
  color:any
  select44:any
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
this.discover.getdiscovermovies(3,event.target.id).subscribe({
  next:(res)=>{
    console.log(res.results);
    this.isLoading = false
    this.movies2 = res.results
    
  } 
})
}
select2(event:any){
  console.log(event.target.id);
  this.discover.getdiscovermovies(1,'popularity.desc',event.target.id).subscribe({
    next:(res)=>{
      console.log(res.results);
      this.isLoading = false
      this.movies2 = res.results
      
    } 
  })
  }
  select3(event:any){
    console.log(event.target.value);
    this.discover.getdiscovermovies(1,'popularity.desc',35,event.target.value).subscribe({
      next:(res)=>{
        console.log(res.results);
        this.isLoading = false
        this.movies2 = res.results
        
      } 
    })
    }
    select4(){
   this.select44 =  document.getElementById('select')
   this.select44.value ='Release Dates'
      this.discover.getdiscovermovies(1,'popularity.desc').subscribe({
        next:(res)=>{
          this.movies2 = res.results
          this.isLoading = false
         
        } 
      })
    }
ngOnInit(): void {
  this.index2.subscribe((res)=>{
    console.log(res);
  this.discover.getdiscovermovies(res,'popularity.desc').subscribe({
    next:(res)=>{
      this.movies2 = res.results
      this.isLoading = false
    }  
  })

})
}
}
