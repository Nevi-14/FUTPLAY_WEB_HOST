import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  contactForm: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.builder.group({
    name: new FormControl('', [Validators.compose([Validators.required, Validators.maxLength(25)])]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
    })
  }

  onSubmit(contact) {
    console.log(contact);
    this.contactForm.reset();
  }

}
