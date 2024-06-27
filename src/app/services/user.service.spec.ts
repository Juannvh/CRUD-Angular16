import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { of } from 'rxjs';
import { User } from '../models/user';


describe('UsersService', () => {
  let service: UserService;
  let firestoreSpy: jasmine.SpyObj<AngularFirestore>;

  beforeEach(() => {

    const spy = jasmine.createSpyObj('AngularFirestore', ['doc', 'collection']);
    const docSpy = jasmine.createSpyObj('doc', ['delete', 'update']);
    const collectionSpy = jasmine.createSpyObj('collection', ['add'])
    spy.doc.and.returnValue(docSpy);
    spy.collection.and.returnValue(collectionSpy);

    TestBed.configureTestingModule({
      declarations: [],
      providers: [
        UserService,
        { provide: AngularFirestore, useValue: spy }
      ]
    });

    service = TestBed.inject(UserService);
    firestoreSpy = TestBed.inject(AngularFirestore) as jasmine.SpyObj<AngularFirestore>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería llamar a deleteUser', async () => {
    const userId = 'user123';
    await service.deleteUser(userId);
    const docSpy = firestoreSpy.doc as jasmine.Spy;
    const deleteSpy = docSpy.calls.first().returnValue.delete as jasmine.Spy;
    expect(docSpy).toHaveBeenCalledWith(`users/${userId}`);
    expect(deleteSpy).toHaveBeenCalled();

  });

  it('debería llamar a updateUser', async () => {
    const userId = 'user123';
    const userData: User = { username: 'juanperez', name: 'Juan Perez', email: 'juanperez@example.com' };
    await service.updateUser(userId, userData);
    const docSpy = firestoreSpy.doc as jasmine.Spy;
    const updateSpy = docSpy.calls.first().returnValue.update as jasmine.Spy;
    expect(docSpy).toHaveBeenCalledWith(`users/${userId}`);
    expect(updateSpy).toHaveBeenCalledWith(userData);
  });

  it('debería llamar a addUser', async () => {
    const userId = 'user123';
    const userData: User = { username: 'juanperez', name: 'Juan Perez', email: 'juanperez@example.com' };
    await service.addUser(userData);
    const docSpy = firestoreSpy.collection as jasmine.Spy;
    const updateSpy = docSpy.calls.first().returnValue.add as jasmine.Spy;
    expect(docSpy).toHaveBeenCalledWith(`users`);
    expect(updateSpy).toHaveBeenCalledWith(userData);
  });


});
