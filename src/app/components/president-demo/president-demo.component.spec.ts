import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentDemoComponent } from './president-demo.component';

describe('PresidentDemoComponent', () => {
  let component: PresidentDemoComponent;
  let fixture: ComponentFixture<PresidentDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresidentDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresidentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
