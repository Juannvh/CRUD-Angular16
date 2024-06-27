import { MatTableDataSource } from '@angular/material/table';
import { FilterPipe } from './filter.pipe';
import { User } from './models/user';

describe('FilterPipe', () => {
  let pipe: FilterPipe;

  beforeEach(() => {
    pipe = new FilterPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('debería filtrar por nombre', () => {
    const users = new MatTableDataSource<User>([
      { id: "1", name: 'User1', username: 'user1', email: 'user1@example.com' },
      { id: "2", name: 'User2', username: 'user2', email: 'user2@example.com' }
    ]);
    const filterValue = 'User1';
    const filteredUsers = pipe.transform(users, filterValue);
    expect(filteredUsers.data.length).toBe(1);
    expect(filteredUsers.data[0].name).toBe('User1');
  });
  
});
