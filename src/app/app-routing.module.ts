import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegisterComponent } from './compon/login-register/login-register.component';
import { MoviesComponent } from './movies/movies.component';
import { Movies2Component } from './movies2/movies2.component';
import { TvComponent } from './tv/tv.component';
import { DiscoverComponent } from './discover/discover.component';
import { DiscovertvComponent } from './discovertv/discovertv.component';
import { DetailsComponent } from './details/details.component';
import { Details2Component } from './details2/details2.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginRegisterComponent},
{path:'home',component:MoviesComponent},
{path:'movies',component:Movies2Component},
{path:'tv',component:TvComponent},
{path:'discover',component:DiscoverComponent},
{path:'discover2',component:DiscovertvComponent},
{path:'details/:id/:media',component:DetailsComponent},
{path:'details2/:id/:media',component:Details2Component},
{path:'search/:name',component:SearchComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
