import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  // providers: [UserService],
})
export class AddUserComponent implements OnInit {
  userName: string = '';
  constructor(private userService: UserService) {}
  onAddUser() {
    this.userService.addUser(this.userName, 'Active');
  }
  ngOnInit(): void {
    this.userService.statusUpdated.subscribe((res) => {
      console.log(res);
      alert(res);
    });
  }
}
