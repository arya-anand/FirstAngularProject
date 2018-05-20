import { TestBed, inject } from '@angular/core/testing';

import { ManagerCommentService } from './manager-comment.service';

describe('ManagerCommentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManagerCommentService]
    });
  });

  it('should be created', inject([ManagerCommentService], (service: ManagerCommentService) => {
    expect(service).toBeTruthy();
  }));
});
