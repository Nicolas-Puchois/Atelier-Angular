import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecrementeComponent } from './decremente.component';

describe('DecrementeComponent', () => {
  let component: DecrementeComponent;
  let fixture: ComponentFixture<DecrementeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecrementeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecrementeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
