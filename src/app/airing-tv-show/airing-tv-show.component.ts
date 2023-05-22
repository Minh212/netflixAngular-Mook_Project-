import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from '../service/movie-api-service.service';
@Component({
  selector: 'app-airing-tv-show',
  templateUrl: './airing-tv-show.component.html',
  styleUrls: ['./airing-tv-show.component.css']
})
export class AiringTvShowComponent implements OnInit {

 
  constructor(private service: MovieApiServiceService, private router:ActivatedRoute,private title:Title, private meta:Meta) {

  }
  tvShowGenres: any = [];
  airingTvShow: any = []

  ngOnInit(): void {
    this.getAiringShow();
    this.getTvShowGenres();
  }
  sortTVShow(event: any): void {
    if (event == 0) {
      return this.airingTvShow = this.airingTvShow.sort((obj1: any, obj2: any) => {
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
      return this.airingTvShow = this.airingTvShow.sort((obj1: any, obj2: any) => {
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
      return this.airingTvShow = this.airingTvShow.sort((obj1: any, obj2: any) => {
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
      return this.airingTvShow = this.airingTvShow.sort((obj1: any, obj2: any) => {
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
      return this.airingTvShow = this.airingTvShow.sort((obj1: any, obj2: any) => {
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
      return this.airingTvShow = this.airingTvShow.sort((obj1: any, obj2: any) => {
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

  getTvShowGenres(){
    this.service.getTvShowGenres().subscribe((result) => {
      console.log(result,'TvShowGenres');
      this.tvShowGenres= result.results;
    })
  }
  getAiringShow() {
    this.service.getAiring().subscribe((result) => {
      console.log(result);
      this.airingTvShow = result.results;
    });
  }

}
