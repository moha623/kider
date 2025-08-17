import { Component } from '@angular/core';
import { HomeService } from '../services/homeservice';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  appointmentData = {
    guardianName: '',
    guardianEmail: '',
    motherPhone: '',
    fatherPhone: '',
    childName: '',
    childAge: '',
    residence: '',
    message: ''
  };

  isSubmitting = false;
  submitMessage = '';
  phonePattern = /^(?:\+?966|0)?5[0-9]{8}$/; // Saudi phone number validation
  toastService: any;

  constructor(private homeService: HomeService) {}
async onSubmit(form: NgForm) {
  if (form.invalid) {
    // Show validation errors for all fields
    Object.keys(form.controls).forEach(controlName => {
      const control = form.controls[controlName];
      if (control.invalid) {
        const fieldName = this.getFieldDisplayName(controlName);
        this.toastService.show(`يرجى إدخال ${fieldName} بشكل صحيح`);
        console.warn(`Invalid field: ${controlName}`, control.value);
      }
    });
    return;
  }

  // Convert childAge to number
  const dataToSend = {
    ...this.appointmentData,
    childAge: Number(this.appointmentData.childAge)
  };

  this.isSubmitting = true;
  
  try {
    console.log('Submitting form data:', dataToSend);
    await this.homeService.addAppointment(dataToSend);
    
    this.toastService.show('تم إرسال الطلب بنجاح!');
    form.resetForm();
    
    // Reset form data
    this.appointmentData = {
      guardianName: '',
      guardianEmail: '',
      motherPhone: '',
      fatherPhone: '',
      childName: '',
      childAge: '',
      residence: '',
      message: ''
    };
  } catch (error) {
    console.error('Submission failed with data:', dataToSend, error);
    this.toastService.show('حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.');
  } finally {
    this.isSubmitting = false;
  }
}

private getFieldDisplayName(field: string): string {
  const fieldNames: { [key: string]: string } = {
    guardianName: 'اسم ولي الأمر',
    guardianEmail: 'البريد الإلكتروني',
    motherPhone: 'هاتف الأم',
    fatherPhone: 'هاتف الأب',
    childName: 'اسم الطفل',
    childAge: 'عمر الطفل',
    residence: 'مكان الإقامة',
    message: 'الرسالة'
  };
  return fieldNames[field] || field;
}
}
