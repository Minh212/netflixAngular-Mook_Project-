import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from '../service/movie-api-service.service';

@Component({
  selector: 'app-top-rated-tv-show',  
  templateUrl: './top-rated-tv-show.component.html',
  styleUrls: ['./top-rated-tv-show.component.css']
})
export class TopRatedTvShowComponent implements OnInit {
  

  constructor(private service: MovieApiServiceService, private router:ActivatedRoute,private title:Title, private meta:Meta) {

  }
  tvShowGenres: any = [];
  topRatedTVShow: any = []

  ngOnInit(): void {
    this.getTopRated();
    this.getTvShowGenres();
  }
  sortTVShow(event: any): void {
    if (event == 0) {
      return this.topRatedTVShow = this.topRatedTVShow.sort((obj1: any, obj2: any) => {
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
      return this.topRatedTVShow = this.topRatedTVShow.sort((obj1: any, obj2: any) => {
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
      return this.topRatedTVShow = this.topRatedTVShow.sort((obj1: any, obj2: any) => {
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
      return this.topRatedTVShow = this.topRatedTVShow.sort((obj1: any, obj2: any) => {
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
      return this.topRatedTVShow = this.topRatedTVShow.sort((obj1: any, obj2: any) => {
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
      return this.topRatedTVShow = this.topRatedTVShow.sort((obj1: any, obj2: any) => {
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
  getTopRated() {
    this.service.getTopRatedTV().subscribe((result) => {
      console.log(result, "TopRatedTVShow");
      this.topRatedTVShow = result.results;
    });
  }
}
