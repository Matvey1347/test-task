import { Component, OnInit } from '@angular/core';

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
  emailPlaceholderRemove() {
    const email:any = document.getElementsByClassName('form__email')[0]
    email.placeholder = ""
  }
  emailPlaceholderAdd() {
    const email:any = document.getElementsByClassName('form__email')[0]
    email.placeholder = 'ex: email@yahoo.com'
  }
  phonePlaceholderRemove() {
    const phone:any = document.getElementsByClassName('form__phone')[0]
    phone.placeholder = ""
  }
  phonePlaceholderAdd(){
    const phone:any = document.getElementsByClassName('form__phone')[0]
    phone.placeholder = '(000) 000-0000'
  }
}