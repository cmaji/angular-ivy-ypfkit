import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  constructor() {}

  name = new FormControl('');
  nameraw = new FormControl('');

  ngOnInit() {}

  updateForm(data: string): void {
    this.name.setValue(data);
  }
}
