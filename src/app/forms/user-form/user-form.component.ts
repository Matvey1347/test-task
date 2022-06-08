import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  loginForm!: FormGroup ;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  private createForm() {
    this.loginForm  = this.fb.group({
      FullName: [null],
      LastName: [null],
      StreetAddress: [null],
      StreetAddressLine2: [null],
      City: [null],
      StateorProvince: [null],
      PostalorZpCode: [null],
      Phone: [null,Validators.maxLength(10)],
      Email: [null,Validators.email],
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
  ngOnInit(): void {
  }
  @ViewChild("emailInput") emailInput!:ElementRef;
  @ViewChild("phoneInput") phoneInput!:ElementRef;
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