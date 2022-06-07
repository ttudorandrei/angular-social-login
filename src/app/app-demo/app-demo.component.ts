import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import {  GoogleLoginProvider } from "@abacritt/angularx-social-login";
import { SocialUser } from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-app-demo',
  templateUrl: './app-demo.component.html',
  styleUrls: ['./app-demo.component.css']
})
export class AppDemoComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;

  constructor(private authService: SocialAuthService) { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  ngOnInit(): void {
    console.log(this.loggedIn);
    this.loggedIn = false
    
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

}
