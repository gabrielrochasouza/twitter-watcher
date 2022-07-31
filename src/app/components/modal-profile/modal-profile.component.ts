import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-modal-profile',
  templateUrl: './modal-profile.component.html',
  styleUrls: ['./modal-profile.component.css']
})
export class ModalProfileComponent implements OnInit {

  constructor() { }

  public showModal : Boolean = true
  public close(){
    this.showModal=false
  }
  ngOnInit(): void {
  }

}
