import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  loginForm: any;
  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.loginForm = {
      FullName: '',
      LastName: '',
      StreetAddress: '',
      StreetAddressLine2: '',
      City: '',
      StateorProvince:'',
      PostalorZpCode:'',
      phone:'',
      email:'',
    }
  } 
  printForm() {
    console.log(this.loginForm);
    this.initForm();
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