import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserFormComponent } from './user-form.component';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


// Mock classes for UserService and Router
class MockUserService {
  getUserById(id: string) {
    return of({ name: 'John Doe', username: 'john', email: 'john@example.com' });
  }
  addUser(user: any) { }
  updateUser(id: string, user: any) { }
}

class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

class MockActivatedRoute {
  snapshot = {
    paramMap: {
      get: () => '1', // Simulate having an 'id' parameter
    }
  }
}

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;
  let userService: UserService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormComponent ],
      imports: [ ReactiveFormsModule, FormsModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule,BrowserAnimationsModule ],
      providers: [
        FormBuilder,
        { provide: UserService, useClass: MockUserService },
        { provide: Router, useClass: MockRouter },
        { provide: ActivatedRoute, useClass: MockActivatedRoute, }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userService = TestBed.inject(UserService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar datos de usuario para editarlos cuando hay un ID de usuario', () => {
    expect(component.userForm.value).toEqual({
      name: 'John Doe',
      username: 'john',
      email: 'john@example.com'
    });
  });

  it('debería navegar a "/usuarios" en la parte posterior', () => {
    component.back();
    expect(router.navigate).toHaveBeenCalledWith(['/users']);
  });

  it('debería llamar a addUser al enviar cuando no hay ID de usuario', () => {
    component.userId = '';
    spyOn(userService, 'addUser').and.callThrough();
    component.onSubmit();
    expect(userService.addUser).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/users']);
  });

  it('debería llamar a updateUser al enviar cuando exista userId', () => {
    spyOn(userService, 'updateUser').and.callThrough();
    component.onSubmit();
    expect(userService.updateUser).toHaveBeenCalledWith('1', component.userForm.value);
    expect(router.navigate).toHaveBeenCalledWith(['/users']);
  });
});
