import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-president-demo',
  templateUrl: './president-demo.component.html',
  styleUrls: ['./president-demo.component.sass']
})
export class PresidentDemoComponent implements OnInit {

  // create president properties
  firstName: string;
  lastName: string;
  age: number;
  presID: number;
  hasChildren: boolean;
  wives: string[];
  numberOfTweets: number[];
  mixedArray: any[];
  tupleArray: [boolean, number, string];

  constructor() {
    this.firstName = `Donald`;
    this.lastName = `Trump`;
    this.age = 73;
    this.presID = 45;

    this.hasChildren = true;
    this.wives = [`Melania Krauss`, `Marla Maples`, `Ivana Zelnickova`];
    this.numberOfTweets = [12, 5, 23, 5];
    this.mixedArray = [true, true, `Bernie`, `Biden`, `USA`, 0, false, `New York`];
    this.tupleArray = [false, 100, `Pence`];
  }

  ngOnInit(): void {
  }

}
