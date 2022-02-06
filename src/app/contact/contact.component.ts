import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  private email: string = "";
  private password: string = "";

  signinForm = this.formBuilder.group({
    email: this.email,
    password:this.password,
  });



  ngOnInit(): void {
  }

  submit() {
    // TODO:
    // Check the backend
  }
}
