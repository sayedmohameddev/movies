import { HttpClient } from '@angular/common/http';
import { Component ,OnInit, Pipe ,PipeTransform} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { DetailsService } from '../details.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  details2:any 
  similar:any
  img:any
  img2:any
  posterPath:string = 'https://image.tmdb.org/t/p/w500'
  title:any
  title2:any
  video:any = []
  key:any=[]
  line:any ='?autoplay=1'
 media2:any
 isloading:boolean = true
 known:any =[]
 trendingperson:any[]=[]
constructor(private deatails:DetailsService , private route:ActivatedRoute , private sanitizer: DomSanitizer, private trending:TrendingService){
  
}
transform(url:any) {
  return this.sanitizer.bypassSecurityTrustResourceUrl(url);
}
ngOnInit(): void {
  let {id ,media} = this.route.snapshot.params
  if(media == 'movie'){
    this.media2 = 'movie'
  }if (media == 'person') {
    this.media2 = 'person'
  } if (media == 'tv'){
    this.media2 = 'tv'
  }
  console.log(id);
  console.log(media);
  this.deatails.getdetails(media,id).subscribe({
    next:(res)=>{
     this.details2 = res
     this.img2 = res.poster_path 
   console.log(res);
   
   setTimeout(() => {
    this.isloading = false
   }, 10000);
this.known = res.also_known_as
console.log(this.known);

     
     this.img = 'https://image.tmdb.org/t/p/original' + res.backdrop_path
      
    }
  })
  this.deatails.getSimilar(media,id).subscribe((res)=>{
this.similar = res.results
console.log(this.similar);


  })
  this.trending.gettrending("person").subscribe({
    next:(res)=>{
      this.trendingperson = res.results
      console.log(this.trendingperson);
      
     
     
    }
  })
}
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: false,
  autoplay:false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  margin: 0,
  navText: ["<i class='fa fa-chevron-left '></i>","<i class='fa fa-chevron-right'></i>"],
responsive:{
 0: {
  items: 1
},
400: {
  items: 1
},
740: {
  items: 2
},
940: {
  items: 2
}
},
  nav: true
}
customOptions2: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  autoplay:true,
  pullDrag: true,
  dots: false,
  navSpeed: 700,
  margin: 20,
  navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
responsive:{
 0: {
  items: 2
},
400: {
  items: 2
},
740: {
  items: 3
},
940: {
  items: 8
}
},
  nav: true
}
}




