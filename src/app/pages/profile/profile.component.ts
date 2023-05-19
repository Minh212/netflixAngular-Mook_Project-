import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isLoading: boolean = true; // Set isLoading to true initially

  email: string = 'demo@example.com';
  password: string = 'demopassword';

  profilePictures: string[] = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/640px-Donald_Trump_official_portrait.jpg'
  ];
  selectedProfilePicture: string = '';

  constructor() { }

  ngOnInit(): void {
    this.selectRandomProfilePicture();
  }

  selectRandomProfilePicture() {
    this.isLoading = true; // Set isLoading to true before loading
    const randomIndex = Math.floor(Math.random() * this.profilePictures.length);
    this.selectedProfilePicture = this.profilePictures[randomIndex];
    this.isLoading = false; // Set isLoading to false after loading is complete
  }
}
