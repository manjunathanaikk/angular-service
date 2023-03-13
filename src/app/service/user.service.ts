import { EventEmitter, Injectable } from '@angular/core';
import { LogService } from './log.service';
@Injectable()
export class UserService {
  constructor(private logService: LogService) {}
  users = [
    { name: 'Manju1', status: 'Active' },
    { name: 'Manju2', status: 'Active' },
    { name: 'Manju3', status: 'Active' },
  ];
  statusUpdated = new EventEmitter<string>();
  addUser(name: string, status: string) {
    this.users.push({ name, status });
    this.logService.logStaus(status);
  }
  updateStatus(id: number, status: string) {
    this.users[id].status = status;
    this.statusUpdated.emit(status);
    this.logService.logStaus(status);
  }
}
