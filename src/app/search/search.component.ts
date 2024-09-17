import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
search:any=[]
index:BehaviorSubject<number> = new BehaviorSubject(1)
index2 = this.index.asObservable()
isLoading:boolean =true
constructor(private http:HttpClient , private router:ActivatedRoute ,private z:SearchService){}
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
  this.router.params.subscribe(
    (params)=>{
      params['name']
      this.isLoading = false
      this.index2.subscribe((res)=>{
        this.z.getsearch(params['name'],res).subscribe((res)=>{
this.search = res.results

        })
      })
})


}
}
