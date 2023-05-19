import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { Title, Meta } from '@angular/platform-browser';
import { debounceTime } from 'rxjs/operators';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  isLoading: boolean = false;
  constructor(private service: MovieApiServiceService, private title: Title, private meta: Meta) {
    this.title.setTitle('Netflix - Search Movies');
    this.meta.updateTag({ name: 'description', content: 'Search Here Movies Like Avatar War etc' });
  }

  ngOnInit(): void {
    this.searchForm.get('movieName')?.valueChanges.pipe(debounceTime(300)).subscribe(() => {
      this.submitForm();
    });
  }


  searchResult: any;
  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  });

  submitForm() {
    this.isLoading = true; // Set isLoading to true before making the API call
    this.service.getSearchMovie(this.searchForm.value).subscribe((result) => {
      this.searchResult = result.results;
      this.isLoading = false; // Set isLoading to false after receiving the search results
    });
  }
  

}
