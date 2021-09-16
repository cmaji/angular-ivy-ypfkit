import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  RequiredValidator,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-form-with-validation',
  templateUrl: './form-with-validation.component.html',
  styleUrls: ['./form-with-validation.component.css']
})
export class FormWithValidationComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  BasicInfoGrp = this.fb.group({
    fname: ['', Validators.required],
    lname: [],
    age: [],
    address: this.fb.group({
      street: [],
      state: ['', Validators.required],
      city: [],
      phone: []
    })
  });

  get BasicFormControl() {
    return this.BasicInfoGrp.controls;
  }

  ngOnInit() {}

  SubmitForm(): void {
    Object.keys(this.BasicInfoGrp.controls).forEach(field => {
      const ctrl = this.BasicInfoGrp.get(field);
      if (ctrl instanceof FormGroup) {
        Object.keys(ctrl.controls).forEach(nestedField => {
          const childCtrl = ctrl.get(nestedField);
          childCtrl.markAllAsTouched();
        });
      }
      ctrl.markAsTouched();
    });

    if (!this.BasicInfoGrp.valid) {
      console.log('Invalid Form');
      // console.log(this.BasicInfoGrp.);
      return;
    }

    console.log('IsValid ' + this.BasicInfoGrp.valid);
  }
}
