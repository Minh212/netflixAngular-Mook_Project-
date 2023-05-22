import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import {HttpClientModule} from '@angular/common/http';
import { MovieApiServiceService } from './service/movie-api-service.service';

import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './pages/sign-in/sign-in.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { ActorComponent } from './pages/actor/actor.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { PopularTvShowComponent } from './tv-show/popular-tv-show/popular-tv-show.component';
import { AiringTvShowComponent } from './tv-show/airing-tv-show/airing-tv-show.component';
import { TopRatedTvShowComponent } from './tv-show/top-rated-tv-show/top-rated-tv-show.component';
import { PopularMovieComponent } from './movie/popular-movie/popular-movie.component';
import { TopRatedComponent } from './movie/top-rated/top-rated.component';
import { NowPlayingComponent } from './movie/now-playing/now-playing.component';
import { UpcomingComponent } from './movie/upcoming/upcoming.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent,
    SigninComponent,
    ProfileComponent,
    LoadingComponent,
    ActorComponent,
    TvShowComponent,
    PopularTvShowComponent,
    AiringTvShowComponent,
    TopRatedTvShowComponent,
    PopularMovieComponent,
    TopRatedComponent,
    NowPlayingComponent,
    UpcomingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [MovieApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
