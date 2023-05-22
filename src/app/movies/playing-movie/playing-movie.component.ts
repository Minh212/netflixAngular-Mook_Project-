import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from '../../service/movie-api-service.service';

@Component({
  selector: 'app-playing-movie',
  templateUrl: './playing-movie.component.html',
  styleUrls: ['./playing-movie.component.css']
})
export class PlayingMovieComponent implements OnInit {

  constructor(private service: MovieApiServiceService, private router:ActivatedRoute,private title:Title, private meta:Meta) {

  }

  movieGenres: any = [];
  moviesList: any = [];
  ngOnInit(): void {
    this.getMovieGenres();
    this.getMovies();
  }
  sortMovies(event: any): void {
    if (event == 0) {
      return this.moviesList = this.moviesList.sort((obj1: any, obj2: any) => {
        if (obj1.original_name > obj2.original_name) {
          return 1;
        }

        if (obj1.original_name < obj2.original_name) {
          return -1;
        }

        return 0;
      });
    }
    if (event == 1) {
      return this.moviesList = this.moviesList.sort((obj1: any, obj2: any) => {
        if (obj1.original_name > obj2.original_name) {
          return -1;
        }

        if (obj1.original_name < obj2.original_name) {
          return 1;
        }

        return 0;
      });
    }
    if (event == 2) {
      return this.moviesList = this.moviesList.sort((obj1: any, obj2: any) => {
        if (obj1.popularity > obj2.popularity) {
          return 1;
        }

        if (obj1.popularity < obj2.popularity) {
          return -1;
        }

        return 0;
      });
    }
    if (event == 3) {
      return this.moviesList = this.moviesList.sort((obj1: any, obj2: any) => {
        if (obj1.popularity > obj2.popularity) {
          return -1;
        }

        if (obj1.popularity < obj2.popularity) {
          return 1;
        }

        return 0;
      });
    }
    if (event == 4) {
      return this.moviesList = this.moviesList.sort((obj1: any, obj2: any) => {
        if (obj1.first_air_date > obj2.first_air_date) {
          return -1;
        }

        if (obj1.first_air_date < obj2.first_air_date) {
          return 1;
        }

        return 0;
      });
    }
    if (event == 5) {
      return this.moviesList = this.moviesList.sort((obj1: any, obj2: any) => {
        if (obj1.first_air_date > obj2.first_air_date) {
          return 1;
        }

        if (obj1.first_air_date < obj2.first_air_date) {
          return -1;
        }

        return 0;
      });
    }
  }

  getMovieGenres(){
    this.service.getTvShowGenres().subscribe((result) => {
      console.log(result);
      this.movieGenres= result.results;
    })
  }
  getMovies() {
    this.service.getPlayingMovies().subscribe((result) => {
      console.log(result);
      this.moviesList = result.results;
    });
  }
}
