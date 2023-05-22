import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { SearchComponent } from './pages/search/search.component';
import { SigninComponent } from './pages/sign-in/sign-in.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard } from './auth.guard';
import { ActorComponent } from './pages/actor/actor.component';
import { PopularTvShowComponent } from './tv-show/popular-tv-show/popular-tv-show.component';
import { AiringTvShowComponent } from './tv-show/airing-tv-show/airing-tv-show.component';
import { TopRatedTvShowComponent } from './tv-show/top-rated-tv-show/top-rated-tv-show.component';
import { PopularMovieComponent } from './movie/popular-movie/popular-movie.component';
import { NowPlayingComponent } from './movie/now-playing/now-playing.component';
import { TopRatedComponent } from './movie/top-rated/top-rated.component';
import { UpcomingComponent } from './movie/upcoming/upcoming.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'movie/:id', component: MovieDetailsComponent, canActivate: [AuthGuard] },
  { path: 'actor/:id', component: ActorComponent, canActivate: [AuthGuard] },
  { path: 'signIn', component: SigninComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'tv-shows/popular', component: PopularTvShowComponent},
  { path: 'tv-shows/airing-today', component: AiringTvShowComponent, canActivate: [AuthGuard]},
  { path: 'tv-shows/top-rated', component: TopRatedTvShowComponent, canActivate: [AuthGuard]},
  {path:'movies', component: PopularMovieComponent, canActivate: [AuthGuard]},
  {path:'movies/playing-now', component: NowPlayingComponent, canActivate: [AuthGuard]},
  {path:'movies/top-rated', component: TopRatedComponent, canActivate: [AuthGuard]},
  {path:'movies/upcoming', component: UpcomingComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
