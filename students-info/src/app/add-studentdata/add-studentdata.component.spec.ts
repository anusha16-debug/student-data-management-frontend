import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentdataComponent } from './add-studentdata.component';

describe('AddStudentdataComponent', () => {
  let component: AddStudentdataComponent;
  let fixture: ComponentFixture<AddStudentdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudentdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
