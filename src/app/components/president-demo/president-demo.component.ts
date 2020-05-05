import { Component, OnInit } from '@angular/core';
import { President } from "../../interfaces/president";

@Component({
  selector: 'app-president-demo',
  templateUrl: './president-demo.component.html',
  styleUrls: ['./president-demo.component.sass']
})
export class PresidentDemoComponent implements OnInit {
  president: President;

  constructor() {
  }

  ngOnInit(): void {
  }

}
