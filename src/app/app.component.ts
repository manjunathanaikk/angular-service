import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [UserService],
})
export class AppComponent implements OnInit {
  users: { name: string; status: string }[] = [];
  title = 'angular-service';
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.users = this.userService.users;
  }
}
