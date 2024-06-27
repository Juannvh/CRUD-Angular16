import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { of } from 'rxjs';
import { InjectionToken } from '@angular/core';

export const AngularFireAuthMock = {
  signInWithEmailAndPassword: jasmine.createSpy('signInWithEmailAndPassword').and.returnValue(of({ user: { uid: 'testUserUid' } })),
};

export const FirebaseOptionsToken = new InjectionToken<any>('angularfire2.app.options');


describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginService,
        { provide: AngularFireAuth, useValue: AngularFireAuthMock }, 
        { provide: FirebaseOptionsToken, useValue: {} }
      ]
    });

    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});