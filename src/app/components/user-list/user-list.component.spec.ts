import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { MatTableModule } from '@angular/material/table';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FilterPipe } from 'src/app/filter.pipe';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';


describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userServiceMock: any;
  let angularFirestoreMock: any;

  let routerMock: any;


  beforeEach(() => {
    userServiceMock = jasmine.createSpyObj('UserService', ['getUsers', 'deleteUser']);
    angularFirestoreMock = jasmine.createSpyObj('AngularFirestore', ['collection', 'doc']);
    
    routerMock = { navigate: jasmine.createSpy('navigate') };

    userServiceMock.getUsers.and.returnValue(of([
      { id: "1", name: 'User1', username: 'user1', email: 'user1@example.com' },
      { id: "2", name: 'User2', username: 'user2', email: 'user2@example.com' }
    ]));

    
    TestBed.configureTestingModule({
      declarations: [UserListComponent, FilterPipe],
      imports: [
        MatToolbarModule,
        MatFormFieldModule,
        FormsModule,
        MatTableModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
   
      providers: [
        { provide: UserService, useValue: userServiceMock },
        { provide: AngularFirestore, useValue: angularFirestoreMock },
        { provide: Router, useValue: routerMock }

      ]
    });
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getUsers debería buscar usuarios y actualizar dataSource', () => {
    
    component.getUsers();
    fixture.detectChanges();
    expect(userServiceMock.getUsers).toHaveBeenCalled();
    expect(component.dataSource.data.length).toBe(2);
    expect(component.dataSource.data).toEqual([
      { id: "1", name: 'User1', username: 'user1', email: 'user1@example.com' },
      { id: "2", name: 'User2', username: 'user2', email: 'user2@example.com' }
    ]);
  });

  it('editUser debe navegar a la página de edición con el ID correcto', () => {
    const userId = 123;
    component.editUser(userId);
    expect(routerMock.navigate).toHaveBeenCalledWith(['/edit', userId]);
  });

  it('deleteUser debe llamar a UserService.deleteUser y luego a getUsers', () => {
    const userId = '123'; 
    component.deleteUser(userId);
    expect(userServiceMock.deleteUser).toHaveBeenCalledWith(userId);
    expect(userServiceMock.getUsers).toHaveBeenCalled();
  });
});
