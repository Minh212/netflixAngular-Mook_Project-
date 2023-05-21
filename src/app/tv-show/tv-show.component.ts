import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from '../service/movie-api-service.service';



@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {

  constructor(private service: MovieApiServiceService, private router:ActivatedRoute,private title:Title, private meta:Meta) {

   }
   tvShow: any = []
   popularTVShow: any = []
   airingTVShow:  any = []
   
  ngOnInit(): void {
    this.tvShowData();
    this.getPopularTV();
    this.getAiringTVShow();
  }

  sortTVShow(event: any): void {
    if (event == 0) {
      return this.popularTVShow = this.popularTVShow.sort((obj1: any, obj2: any) => {
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
      return this.popularTVShow = this.popularTVShow.sort((obj1: any, obj2: any) => {
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
      return this.popularTVShow = this.popularTVShow.sort((obj1: any, obj2: any) => {
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
      return this.popularTVShow = this.popularTVShow.sort((obj1: any, obj2: any) => {
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
      
      this.popularTVShow = this.popularTVShow.sort((obj1: any, obj2: any) => {
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
      
      this.popularTVShow = this.popularTVShow.sort((obj1: any, obj2: any) => {
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
  tvShowData(){
    this.service.getTVShowList().subscribe((result) => {
      console.log(result,'tvShowResult#');
      this.tvShow= result.results;
    })
  }

  getPopularTV(){
    this.service.getPopularTV().subscribe((result) => {
      console.log(result,"PopularTVShow");
      this.popularTVShow = result.results;
    });
  }

  getAiringTVShow(){
    this.service.getAiring().subscribe((result) => {
      console.log(result, "AiringTVShow");
      this.airingTVShow = result.results
    });
  }
}
