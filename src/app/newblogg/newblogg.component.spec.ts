import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbloggComponent } from './newblogg.component';

describe('NewbloggComponent', () => {
  let component: NewbloggComponent;
  let fixture: ComponentFixture<NewbloggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewbloggComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewbloggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
