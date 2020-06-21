import { Component, OnInit } from '@angular/core';
import { President } from '../../interfaces/president';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.sass']
})
export class UploadComponent implements OnInit {

  constructor() { }

  president: President = {
    firstName: '',
    lastName: '',
    details: {
      partyAffiliation: '',
      spouse: '',
      termsInOffice: 0,
      vicePresident: ''
    }
  }

  ngOnInit(): void {
  }

  uploadNewPresident() {
    console.log('upload new president');
  }

}
