import { Component, OnInit } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';




@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  constructor() { }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  ngOnInit(): void {
  }

}
