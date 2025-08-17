import { Component, inject, signal  } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
 
import { Header } from "./header/header";
 
import { Footer } from "./footer/footer";
 import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Auth } from '@angular/fire/auth';
import { Firestore } from 'firebase/firestore';
import { HomeService } from './services/homeservice';
import { FirebaseApp } from '@angular/fire/app';

 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer  ,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers:[HomeService]
})
export class App {
  protected readonly title = signal('kider');
  //  private auth = inject(Auth);
  // private firestore = inject(Firestore);

currentUrl = '';

constructor(private router: Router) {
  this.router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe((event: NavigationEnd) => {
    this.currentUrl = event.urlAfterRedirects.toLowerCase();
  });
}

get isAuthRoute(): boolean {
  return this.currentUrl.startsWith('/auth') || this.currentUrl.startsWith('/login') || this.currentUrl.startsWith('/register')|| this.currentUrl.startsWith('/admin-dashboard');
}}


 
 
