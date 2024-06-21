import { Pipe, PipeTransform } from '@angular/core';
import { User } from './models/user';
import { MatTableDataSource } from '@angular/material/table';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: MatTableDataSource<User>, filterValue: string): MatTableDataSource<User> {
    
    if (!filterValue) return users;
    if (filterValue == '') {
      return users;
    }
    return  new MatTableDataSource(users.data.filter(user => user['name'].toLowerCase().includes(filterValue.toLowerCase())));
  }
}
