import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementeComponent } from './incremente.component';

describe('IncrementeComponent', () => {
  let component: IncrementeComponent;
  let fixture: ComponentFixture<IncrementeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncrementeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncrementeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
