import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  email: string = 'demo@example.com';
  password: string = 'demopassword';
  
  profilePictures: string[] = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/640px-Donald_Trump_official_portrait.jpg'
  ];
  selectedProfilePicture: string = '';

  constructor() {
    this.selectRandomProfilePicture();
  }

  selectRandomProfilePicture() {
    const randomIndex = Math.floor(Math.random() * this.profilePictures.length);
    this.selectedProfilePicture = this.profilePictures[randomIndex];
  }
}
