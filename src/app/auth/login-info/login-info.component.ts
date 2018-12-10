import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.css']
})
export class LoginInfoComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }  
}
