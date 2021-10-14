import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesObjectComponent } from './notes-object.component';

describe('NotesObjectComponent', () => {
  let component: NotesObjectComponent;
  let fixture: ComponentFixture<NotesObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
