import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { claimIncludes } from 'express-oauth2-jwt-bearer';

@Component({
  selector: 'app-protected-route',
  templateUrl: './protected-route.component.html',
  styleUrls: ['./protected-route.component.css'],
})
export class ProtectedRouteComponent implements OnInit {
  constructor(public auth: AuthService, public http: HttpClient) {}
  public userRoles;
  public userId;
  public authToken;
  ngOnInit() {
    this.auth.idTokenClaims$.subscribe((claims) => {
      console.log(claims.__raw);
      if (claims) {
        this.userRoles = claims['http://localhost:4000/roles']; // Replace with your namespace
      }
    });
  }
}
