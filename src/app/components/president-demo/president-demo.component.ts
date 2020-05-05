import { Component, OnInit } from '@angular/core';
import { Presidents } from "../../interfaces/presidents";

@Component({
  selector: 'app-president-demo',
  templateUrl: './president-demo.component.html',
  styleUrls: ['./president-demo.component.sass']
})
export class PresidentDemoComponent implements OnInit {
  presidents: Presidents;

  constructor() {
  }

  ngOnInit(): void {
    this.presidents = {
      firstName: `Donald`,
      lastName: `Trump`,
      age: 73,
      presId: 45,
      details: {
        spouse: `Melania Trump`,
        partyAffiliation: `Republican Party`,
        termsInOffice: 1,
        vicePresident: `Mike Pence`
      }
    }
  }

}
