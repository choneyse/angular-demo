import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-join-mailing-list',
  templateUrl: './join-mailing-list.component.html',
  styleUrls: ['./join-mailing-list.component.scss']
})
export class JoinMailingListComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: this.formBuilder.control('', Validators.compose([Validators.required, Validators.email]))
    });
  }

  onSubmit(formData) {
    alert(`Thanks for subscribing: ${formData.email}`);
    console.log(`Thanks for subscribing: ${formData.email}`);
  }
}
