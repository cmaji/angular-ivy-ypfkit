import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-test-grp-form',
  templateUrl: './test-grp-form.component.html',
  styleUrls: ['./test-grp-form.component.css']
})
export class TestGrpFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  CustomerBasicInfo = this.fb.group({
    fname: new FormControl(''),
    lname: new FormControl(''),
    age: new FormControl(''),
    address: this.fb.group({
      state: new FormControl(''),
      city: new FormControl(''),
      street: new FormControl(''),
      pincode: new FormControl('')
    })
  });

  ngOnInit() {}

  GetData(): void {
    let fname = this.CustomerBasicInfo.get('fname').value;

    let state = this.CustomerBasicInfo.get('address').get('state').value;
    console.log('First Name: ' + fname);
    console.log('State: ' + state);
    console.log(this.CustomerBasicInfo.value);
  }
}
