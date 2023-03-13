import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './service/user.service';
import { LogService } from './service/log.service';

@NgModule({
  declarations: [AppComponent, UserComponent, AddUserComponent],
  imports: [BrowserModule, FormsModule],
  providers: [UserService, LogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
