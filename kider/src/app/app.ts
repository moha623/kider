import { Component, signal, inject  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Header } from "./header/header";
import { Home } from './home/home';
import { Footer } from "./footer/footer";
 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('kider');
  //  private auth = inject(Auth);
  // private firestore = inject(Firestore);
}
