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
  underlineName: boolean = true;
  underlineStyle: {};

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
          birthday: new Date(`06/14/1946`),
          presId: 45,
          img: `https://d3i6fh83elv35t.cloudfront.net/static/2019/09/2019-09-29T133251Z_1883087259_RC1901EB47F0_RTRMADP_3_USA-TRUMP-WHISTLEBLOWER-1024x681.jpg`,
          current: true,
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
          birthday: new Date(`08/04/1961`),
          presId: 44,
          img: `https://s.abcnews.com/images/Politics/obama-gty-er-200505_hpMain_16x9_992.jpg`,
          current: false,
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
          birthday: new Date(`07/06/1946`),
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
    }, 100);

    this.checkPresidentStyles();
  }

  // toggle details
  showHideDetails() {
    this.showDetails = !this.showDetails;
  }

  // this method will check whether the president's names should be underlined
  checkPresidentStyles() {
    this.underlineStyle = {
      'text-decoration': this.underlineName ? 'underline' : 'none'
    }
  }

}
