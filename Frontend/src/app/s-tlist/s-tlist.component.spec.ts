import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { STlistComponent } from './s-tlist.component';

describe('STlistComponent', () => {
  let component: STlistComponent;
  let fixture: ComponentFixture<STlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ STlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(STlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
