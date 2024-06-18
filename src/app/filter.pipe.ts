import { Pipe, PipeTransform } from '@angular/core';
import { User } from './models/user';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: User[], searchTerm: string): User[] {

    if(searchTerm == '') {
      return users;
    }
    
    return users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
  
  }

}
