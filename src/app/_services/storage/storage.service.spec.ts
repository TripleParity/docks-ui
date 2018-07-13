import { TestBed, inject } from '@angular/core/testing';

import { StorageService } from './storage.service';
import {TaskService} from '_services/task/task.service';

describe('StorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageService]
    });
  });

  it('should be created', inject([StorageService], (service: StorageService) => {
    expect(service).toBeTruthy();
  }));

    it('should have all functions', inject([StorageService], (service: StorageService) => {
        expect(service.getToken).toBeTruthy();
        expect(service.removeToken).toBeTruthy();
        expect(service.saveToken).toBeTruthy();
        expect(service.signOut).toBeTruthy();
    }));

    it('should save and load tokens', inject([StorageService], (service: StorageService) => {
        service.saveToken('TheEmperor', 'Protects');
        expect(service.getToken('TheEmperor')).toBe('Protects');
        expect(service.getToken('NULL')).toBeFalsy();
    }));
});
