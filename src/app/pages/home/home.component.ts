import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { Title, Meta } from '@angular/platform-browser';
import {  ElementRef } from '@angular/core';
import {  ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('rowposterContainer') rowposterContainer!: ElementRef;


  loading: boolean = true; // Corrected property name
  constructor(private service: MovieApiServiceService, private title: Title, private meta: Meta) {
    this.title.setTitle('Netflix - Watch Movie');
    this.meta.updateTag({ name: 'description', content: 'Wtch Online Movies' });
  }

  bannerResult: any = [];
  trendingMovieResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  ngOnInit(): void {
    this.loadData();
  }
  
  onRowPosterMouseEnter(): void {
    this.rowposterContainer.nativeElement.scrollLeft += 100; // Thay đổi giá trị 100 thành giá trị cuộn mong muốn
  }

  loadData(): void {
    this.loading = true; // Set loading to true before making API calls

    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
      this.loading = false; // Set loading to false after data is loaded
    });

    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMovieResult = result.results;
      this.loading = false; // Set loading to false after data is loaded
    });

    this.service.fetchActionMovies().subscribe((result) => {
      this.actionMovieResult = result.results;
      this.loading = false; // Set loading to false after data is loaded
    });

    this.service.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovieResult = result.results;
      this.loading = false; // Set loading to false after data is loaded
    });

    this.service.fetchAnimationMovies().subscribe((result) => {
      this.animationMovieResult = result.results;
      this.loading = false; // Set loading to false after data is loaded
    });

    this.service.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
      this.loading = false; // Set loading to false after data is loaded
    });

    this.service.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMovieResult = result.results;
      this.loading = false; // Set loading to false after data is loaded
    });

    this.service.fetchScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMovieResult = result.results;
      this.loading = false; // Set loading to false after data is loaded
    });

    this.service.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result.results;
      this.loading = false; // Set loading to false after data is loaded
    });
  }

}
