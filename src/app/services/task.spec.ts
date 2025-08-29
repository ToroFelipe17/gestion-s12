import { TestBed } from '@angular/core/testing';

import { TasksListComponent } from '../tasks-list/tasks-list';

describe('Task', () => {
  let service: TasksListComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksListComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
