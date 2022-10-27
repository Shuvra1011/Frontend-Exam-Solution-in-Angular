import { TestBed } from '@angular/core/testing';

import { BookmarkServiceTsService } from './bookmark.service';

describe('BookmarkServiceTsService', () => {
  let service: BookmarkServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookmarkServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
