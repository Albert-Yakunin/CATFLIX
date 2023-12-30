import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SearchComponent} from "./pages/search/search.component";
import {MovieDetailsComponent} from "./pages/movie-details/src/app/pages/movie-details/MovieDetails.component";

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'search', component:SearchComponent},
  {path: 'movie/:id', component:MovieDetailsComponent}
];
