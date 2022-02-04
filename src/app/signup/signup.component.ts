import { Component, OnInit } from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  private email: string = "";
  private firstname: string = "";
  private lastname: string = "";
  private password: string = "";

  signupForm = this.formBuilder.group({
    firstname:this.firstname,
    lastname:this.lastname,
    email: this.email,
    password:this.password,
  });



  ngOnInit(): void {
  }

  submit() {
    window.alert(
      this.signupForm.get('email')?.value + '\n' +
      "Signed up"
    )
  }
}
