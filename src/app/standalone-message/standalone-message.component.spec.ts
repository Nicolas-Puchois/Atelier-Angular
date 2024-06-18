import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneMessageComponent } from './standalone-message.component';

describe('StandaloneMessageComponent', () => {
  let component: StandaloneMessageComponent;
  let fixture: ComponentFixture<StandaloneMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandaloneMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
