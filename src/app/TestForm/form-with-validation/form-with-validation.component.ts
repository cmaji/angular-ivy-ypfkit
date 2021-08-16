import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-with-validation',
  templateUrl: './form-with-validation.component.html',
  styleUrls: ['./form-with-validation.component.css']
})
export class FormWithValidationComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

BasicInfoGrp=this.fb.group({
fname:[],
lname:[],
address:this.fb.group({
  street:[],
  phone:[]
})
});

  ngOnInit() {
  }

}