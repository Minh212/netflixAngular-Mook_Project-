import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  isLoading: boolean = true;

  ngOnInit(): void {
    // Simulate a 2-second loading time
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
