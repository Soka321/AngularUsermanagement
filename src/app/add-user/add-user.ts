import { Component } from '@angular/core';
import {UserService} from '../user-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css'
})
export class AddUser {
      User = {Name: "", Surname: "", Email: "", Password: ""};

  constructor(private service: UserService){}

  OnAddUser()
  {
    return this.service.AddUser(this.User).subscribe({
           next: (response) => { alert('Added User');},

         error: (error) => {  alert('could not add User');}
    });
  }

}
