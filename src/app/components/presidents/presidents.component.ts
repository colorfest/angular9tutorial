import { Component, OnInit } from '@angular/core';
import { President } from '../../interfaces/president';

@Component({
  selector: 'app-presidents',
  templateUrl: './presidents.component.html',
  styleUrls: ['./presidents.component.sass']
})
export class PresidentsComponent implements OnInit {
  presidents: President[];
  showDetails: boolean = false;
  dataLoaded: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // set presidents
    setTimeout(() => {
      this.presidents = [
        {
          firstName: `Donald`,
          lastName: `Trump`,
          middleInitial:  `J.`,
          age: 73,
          presId: 45,
          details: {
            spouse: `Melania Trump`,
            partyAffiliation: `Republican Party`,
            termsInOffice: 1,
            vicePresident: `Mike Pence`
          }
        },
        {
          firstName: `Barack`,
          lastName: `Obama`,
          age: 54,
          presId: 44,
          details: {
            spouse: `Michelle Obama`,
            partyAffiliation: `Democratic Party`,
            termsInOffice: 2,
            vicePresident: `Joe Biden`
          }
        },
        {
          firstName: `George`,
          lastName: `Bush`,
          middleInitial: `W.`,
          age: 73,
          presId: 43,
          details: {
            spouse: `Laura Bush`,
            partyAffiliation: `Republican Party`,
            termsInOffice: 2,
            vicePresident: `Dick Cheney`
          }
        }
      ]
  
      // set conditionals
      this.dataLoaded = true;
    }, 2000);
  }

  // toggle details
  showHideDetails() {
    this.showDetails = !this.showDetails;
  }

}
