import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from '../../service/movie-api-service.service';

@Component({
  selector: 'app-popular-tv-show',
  templateUrl: './popular-tv-show.component.html',
  styleUrls: ['./popular-tv-show.component.css']
})
export class PopularTvShowComponent implements OnInit {

  constructor(private service: MovieApiServiceService, private router:ActivatedRoute,private title:Title, private meta:Meta) {

  }
  tvShow: any = []
  tvShowList: any = []
  airingTVShow:  any = []

 ngOnInit(): void {

   this.getTVShowList();
 }

 sortTVShow(event: any): void {
   if (event == 0) {
     return this.tvShowList = this.tvShowList.sort((obj1: any, obj2: any) => {
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
     return this.tvShowList = this.tvShowList.sort((obj1: any, obj2: any) => {
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
     return this.tvShowList = this.tvShowList.sort((obj1: any, obj2: any) => {
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
     return this.tvShowList = this.tvShowList.sort((obj1: any, obj2: any) => {
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

     this.tvShowList = this.tvShowList.sort((obj1: any, obj2: any) => {
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

     this.tvShowList = this.tvShowList.sort((obj1: any, obj2: any) => {
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


 getTVShowList(){
   this.service.getPopularTV().subscribe((result) => {
     console.log(result,"PopularTVShow");
     this.tvShowList = result.results;
   });
 }

}
