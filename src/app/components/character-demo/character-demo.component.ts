import { Component } from '@angular/core';

@Component({
  selector: 'app-character-demo',
  templateUrl: './character-demo.component.html',
  styleUrls: ['./character-demo.component.sass']
})
export class CharacterDemoComponent {

  // create character properties
  firstName: string;
  lastName: string;
  age: number;
  presID: number;
  hasChildren: boolean;
  exWives: string[];
  numberOfTweetsThisMonth: number[];
  mixedArray: any[];
  tupleArray: [boolean, number, string];


  constructor() {
    this.firstName = `Donald`;
    this.lastName = `Trump`;
    this.age = 73;
    this.presID = 45;

    this.hasChildren = true;
    this.exWives = ['Ivana Zelnickova', 'Marla Maples', 'Melania Knauss'];
    this.numberOfTweetsThisMonth = [12, 5, 23, 5];
    this.mixedArray = [true, true, 'Bernie', 'USA', 0, false, 'New York'];
    this.tupleArray = [false, 100, 'Donald Jr'];
  }

}
