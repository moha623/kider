import { bootstrapApplication } from '@angular/platform-browser';
 
 
 
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { App } from './app/app';
import { environment } from './environments/environment';


bootstrapApplication(App, {
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({ projectId: "kider-faf82", appId: "1:359843086115:web:59390653f04a029b865696", storageBucket: "kider-faf82.firebasestorage.app", apiKey: "AIzaSyCneBFspePcMU6uvsK1sM_gut8yx00LskY", authDomain: "kider-faf82.firebaseapp.com", messagingSenderId: "359843086115", measurementId: "G-WMLXJ2EQEV" })), provideFirestore(() => getFirestore()),
  ]
}).catch(err => console.error(err));