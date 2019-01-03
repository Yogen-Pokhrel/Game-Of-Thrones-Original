import { TestBed } from '@angular/core/testing';

import { DataFetchFromAPIService } from './data-fetch-from-api.service';

describe('DataFetchFromAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataFetchFromAPIService = TestBed.get(DataFetchFromAPIService);
    expect(service).toBeTruthy();
  });
});
