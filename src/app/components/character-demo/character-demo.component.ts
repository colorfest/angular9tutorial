import { Component } from '@angular/core';
import { Character } from "../../models/character";

@Component({
  selector: 'app-character-demo',
  templateUrl: './character-demo.component.html',
  styleUrls: ['./character-demo.component.sass']
})
export class CharacterDemoComponent {
  character: Character;

  constructor() {
    this.character = {
      firstName: `Donald`,
      lastName: `Trump`,
      age: 73,
      presID: 45,
      details: {
        spouse: `Melania Trump`,
        partyAffiliation: `Republican Party`,
        termsInOffice: 1,
        vicePresident: `Mike Pence`
      }
    }
  }

}
