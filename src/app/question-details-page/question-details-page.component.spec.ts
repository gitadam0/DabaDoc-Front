import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDetailsPageComponent } from './question-details-page.component';

describe('QuestionDetailsPageComponent', () => {
  let component: QuestionDetailsPageComponent;
  let fixture: ComponentFixture<QuestionDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionDetailsPageComponent]
    });
    fixture = TestBed.createComponent(QuestionDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
