import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  

  constructor(private firestore: Firestore) {}

async addAppointment(appointmentData: any): Promise<string> {
  try {
    const appointmentsRef = collection(this.firestore, 'appointments');
    const docRef = await addDoc(appointmentsRef, {
      ...appointmentData,
      timestamp: new Date()
    });
    console.log('Document added with ID:', docRef.id);
    return docRef.id;
  } catch (e) {
    console.error('Firestore error details:', {
      error: e,
      data: appointmentData,
      timestamp: new Date().toISOString()
    });
    throw new Error('Error adding document: ' + e);
  }
}
}
