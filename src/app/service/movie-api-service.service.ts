import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http: HttpClient) { }

  baseurl = "https://api.themoviedb.org/3";
  apikey = "08cc33bd5ae3a747598ce2ad84376e66";


  //bannerapidata

  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }


  // trendingmovieapidata
  trendingMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
  }

  // searchmovive
  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'movie#');

    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
  }

  // getmoviedatails
  getMovieDetails(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
  }

  getActorDetails(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/person/${data}?api_key=${this.apikey}`)
  }

  // getMovieVideo
  getMovieVideo(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
  }

  // getMovieCast
  getMovieCast(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
  }
  // action
  fetchActionMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
  }

  // adventure
  fetchAdventureMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`);
  }

  // animation
  fetchAnimationMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`);
  }

  // comedy
  fetchComedyMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`);
  }

  // documentary
  fetchDocumentaryMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`);
  }

  // science-fiction:878

  fetchScienceFictionMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`);
  }

  // thriller:53
  fetchThrillerMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`);
  }

    //get Tv Shows
    getTVShowList(): Observable<any> {
      return this.http.get(`${this.baseurl}/discover/tv?api_key=${this.apikey}`);
    }

  getAiring(): Observable<any> {
    return this.http.get(`${this.baseurl}/tv/airing_today?api_key=${this.apikey}`);
  }

  getPopularTV(): Observable<any> {
    return this.http.get(`${this.baseurl}/tv/popular?api_key=${this.apikey}`);
  }

  getTopRatedTV(): Observable<any> {
    return this.http.get(`${this.baseurl}/tv/top_rated?api_key=${this.apikey}`);
  }

  getTvShowGenres(): Observable<any> {
    return this.http.get(`${this.baseurl}/genre/tv/list?api_key=${this.apikey}`);
  }

  getTopRatedMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/top_rated?api_key=${this.apikey}`);
  }
  getPopularMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/popular?api_key=${this.apikey}`);
  }

  getUpcomingMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/upcoming?api_key=${this.apikey}`);
  }

  getPlayingMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/now_playing?api_key=${this.apikey}`);
  }
}


