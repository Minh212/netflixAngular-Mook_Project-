import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SigninComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  errorMessage2: string = '';
  constructor(private router: Router) {}

  onSubmit() {
    if (this.email === '' || this.password === '') {
      this.errorMessage = 'Please enter your email';
      this.errorMessage2 = 'Please enter your password';
    } else if (this.email === 'demo@example.com' && this.password === 'demopassword') {
      console.log('Logged in successfully!');
      // Navigate to the desired page
      this.router.navigate(['/']); // Replace 'search' with the desired route
    } else {
      this.errorMessage = 'Incorrect username or password';
    }
  }

  fillDemoAccount() {
    this.email = 'demo@example.com';
    this.password = 'demopassword';
    this.errorMessage = '';
    this.errorMessage2 = '';
  }
}
