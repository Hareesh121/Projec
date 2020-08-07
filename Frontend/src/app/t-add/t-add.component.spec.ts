import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TAddComponent } from './t-add.component';

describe('TAddComponent', () => {
  let component: TAddComponent;
  let fixture: ComponentFixture<TAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
