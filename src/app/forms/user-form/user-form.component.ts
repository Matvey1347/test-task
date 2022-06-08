import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  @ViewChild("emailInput") emailInput!: ElementRef;
  @ViewChild("phoneInput") phoneInput!: ElementRef;

  loginForm!: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    const fb = this.fb;
    this.loginForm  = fb.group({
      fullName: fb.control(null, [Validators.required]),
      lastName: fb.control(null, [Validators.required]),
      streetAddress: fb.control(null, [Validators.required]),
      streetAddressLine2: fb.control(null, [Validators.required]),
      city: fb.control(null, [Validators.required]),
      stateorProvince: fb.control(null, [Validators.required]),
      postalorZpCode: fb.control(null, [Validators.required]),
      phone: fb.control(null, [Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9]{3,45}$")]),
      email: fb.control(null, [Validators.required, Validators.email])
    })
  }

  onSubmit() {
    const controls = this.loginForm.controls;
    if(this.loginForm.invalid) {
      Object.keys(controls).forEach((controlName)=>controls[controlName].markAsTouched());
      return;
    }
    console.log(this.loginForm.value);
    this.createForm();
  }
  
  emailPlaceholderRemove() {
    this.emailInput.nativeElement.placeholder = ""
  }

  emailPlaceholderAdd() {
    this.emailInput.nativeElement.placeholder = 'ex: email@yahoo.com'
  }

  phonePlaceholderRemove() {
    this.phoneInput.nativeElement.placeholder = ""
  }

  phonePlaceholderAdd(){
    this.phoneInput.nativeElement.placeholder = '(000) 000-0000'
  }
}