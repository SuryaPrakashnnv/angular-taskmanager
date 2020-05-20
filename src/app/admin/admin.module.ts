import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { DashboardService } from '../dashboard.service';
import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    MyProfileComponent,
    ProjectsComponent,
    UsersComponent
  ],
  exports: [
    AboutComponent,
    DashboardComponent,
    MyProfileComponent,
    ProjectsComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [ DashboardService ]
})
export class AdminModule { }
