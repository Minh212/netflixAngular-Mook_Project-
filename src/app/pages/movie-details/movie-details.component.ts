import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  isLoading: boolean = true; // Set isLoading to true initially
  getMovieDetailResult: any;
  getMovieVideoResult: any;
  getMovieCastResult: any;
  isSorted: boolean = false;

  constructor(private service: MovieApiServiceService, private router: ActivatedRoute, private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId, 'getparamid#');

    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
  }

  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe(async (result) => {
      console.log(result, 'getmoviedetails#');
      this.getMovieDetailResult = await result;

      // Update tags
      // this.title.setTitle(`${this.getMovieDetailResult.original_title} | ${this.getMovieDetailResult.tagline}`);
      // this.meta.updateTag({ name: 'title', content: this.getMovieDetailResult.original_title });
      // this.meta.updateTag({ name: 'description', content: this.getMovieDetailResult.overview });

      // // Facebook
      // this.meta.updateTag({ property: 'og:type', content: "website" });
      // this.meta.updateTag({ property: 'og:url', content: `` });
      // this.meta.updateTag({ property: 'og:title', content: this.getMovieDetailResult.original_title });
      // this.meta.updateTag({ property: 'og:description', content: this.getMovieDetailResult.overview });
      // this.meta.updateTag({ property: 'og:image', content: `https://image.tmdb.org/t/p/original/${this.getMovieDetailResult.backdrop_path}` });

      this.isLoading = false; // Set isLoading to false after the movie details are loaded
    });
  }

  getVideo(id: any) {
    this.service.getMovieVideo(id).subscribe((result) => {
      console.log(result, 'getMovieVideo#');
      result.results.forEach((element: any) => {
        if (element.type == "Trailer") {
          this.getMovieVideoResult = element.key;
        }
      });
    });
  }

  getMovieCast(id: any) {
    this.service.getMovieCast(id).subscribe((result) => {
      console.log(result, 'movieCast#');
      this.getMovieCastResult = result.cast;
    });
  }
  sortActor(){
        if(this.isSorted){
          this.getMovieCastResult.sort((a: { name: number; },b: { name: number; })=>{
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          })
        }
        this.isSorted = !this.isSorted;
  }
}
