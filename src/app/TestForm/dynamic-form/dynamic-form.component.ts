import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
//import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  myDynamicFormGrp: FormGroup;
  dynamicRemarksGrp: FormGroup;

  ngOnInit() {
    this.myDynamicFormGrp = this.fb.group({
      dynamicsFrm: this.fb.array([this.fb.control('')])
    });

    this.dynamicRemarksGrp = this.fb.group({
      rmkDynamic: this.fb.array([this.CreateBaseRemarkForm()])
    });

    console.log(this.myDynamicFormGrp.value);
  }

  CreateBaseRemarkForm(): FormGroup {
    return this.fb.group({
      from: [],
      to: [],
      comments: []
    });
  }

  get GetDynamicFrm() {
    return this.myDynamicFormGrp.get('dynamicsFrm') as FormArray;
  }

  AddControl(): void {
    this.GetDynamicFrm.push(this.fb.control(''));
  }

  get dynamicRmkGetter() {
    return this.dynamicRemarksGrp.get('rmkDynamic') as FormArray;
  }

  AddRmkCtrl(): void {
    this.dynamicRmkGetter.push(this.CreateBaseRemarkForm());
  }
}
