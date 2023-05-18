import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInValue = false; // Giá trị trạng thái đăng nhập

  constructor() {}

  isLoggedIn(): boolean {
    return this.isLoggedInValue;
  }

  login(email: string, password: string): boolean {
    // Thực hiện logic xác thực đăng nhập, ví dụ:
    if (email === 'demo@example.com' && password === 'demopassword') {
      this.isLoggedInValue = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedInValue = false;
  }
}
