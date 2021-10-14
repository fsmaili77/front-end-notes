import { TestBed } from '@angular/core/testing';

import { NotesObjectService } from './notes-object.service';

describe('NotesObjectService', () => {
  let service: NotesObjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesObjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
