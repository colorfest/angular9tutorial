import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDemoComponent } from './character-demo.component';

describe('CharacterDemoComponent', () => {
  let component: CharacterDemoComponent;
  let fixture: ComponentFixture<CharacterDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
