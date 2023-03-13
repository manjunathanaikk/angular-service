import { Component, Input } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  // providers: [UserService],
})
export class UserComponent {
  @Input() user: { name: string; status: string } | undefined;
  @Input() id: number = 0;
  constructor(private userService: UserService) {}
  onUpdateStatus(status: string) {
    this.userService.updateStatus(this.id, status);
  }
}
