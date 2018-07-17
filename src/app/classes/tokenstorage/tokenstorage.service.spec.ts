import { TestBed, inject } from '@angular/core/testing';

import { TaskService } from '_services/task/task.service';
import { TokenStorage } from 'app/_classes';

describe('TokenStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenStorage],
    });
  });

  it('should be created', inject([TokenStorage], (service: TokenStorage) => {
    expect(service).toBeTruthy();
  }));

  it('should have all functions', inject(
    [TokenStorage],
    (service: TokenStorage) => {
      expect(service.getToken).toBeTruthy();
      expect(service.removeToken).toBeTruthy();
      expect(service.saveToken).toBeTruthy();
      expect(service.signOut).toBeTruthy();
    }
  ));

  it('should save and load tokens', inject(
    [TokenStorage],
    (service: TokenStorage) => {
      service.saveToken('TheEmperor', 'Protects');
      expect(service.getToken('TheEmperor')).toBe('Protects');
      expect(service.getToken('NULL')).toBeFalsy();
    }
  ));
});
