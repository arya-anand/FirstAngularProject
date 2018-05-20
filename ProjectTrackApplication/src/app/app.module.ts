import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';
import { UserStoryComponent } from './user-story/user-story.component';
import { TaskComponent } from './task/task.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ManagerCommentComponent } from './manager-comment/manager-comment.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ShowEmployeeComponent } from './employee/show-employee/show-employee.component';
import { CreateManagerCommentComponent } from './manager-comment/create-manager-comment/create-manager-comment.component';
import { ShowManagerCommentComponent } from './manager-comment/show-manager-comment/show-manager-comment.component';
import { ShowProjectComponent } from './project/show-project/show-project.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { ShowTaskComponent } from './task/show-task/show-task.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { ShowUserStoryComponent } from './user-story/show-user-story/show-user-story.component';
import { CreateUserStoryComponent } from './user-story/create-user-story/create-user-story.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { EditProjectComponent } from './project/edit-project/edit-project.component';
import { ViewProjectComponent } from './project/view-project/view-project.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';
import { DeleteProjectComponent } from './project/delete-project/delete-project.component';
import { EditTaskComponent } from './task/edit-task/edit-task.component';
import { DeleteTaskComponent } from './task/delete-task/delete-task.component';
import { ViewTaskComponent } from './task/view-task/view-task.component';
import { EditUserStoryComponent } from './user-story/edit-user-story/edit-user-story.component';
import { DeleteUserStoryComponent } from './user-story/delete-user-story/delete-user-story.component';
import { ViewUserStoryComponent } from './user-story/view-user-story/view-user-story.component';
import { EditManagerCommentComponent } from './manager-comment/edit-manager-comment/edit-manager-comment.component';
import { DeleteManagerCommentComponent } from './manager-comment/delete-manager-comment/delete-manager-comment.component';
import { ViewManagerCommentComponent } from './manager-comment/view-manager-comment/view-manager-comment.component';

import { EmployeeService } from './services/employee.service';
import { ProjectService } from './services/project.service';
import { TaskService } from './services/task.service';
import { UserStoryService } from './services/user-story.service';
import { ManagerCommentService } from './services/manager-comment.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    ProjectComponent,
    UserStoryComponent,
    TaskComponent,
    HeaderComponent,
    FooterComponent,
    ManagerCommentComponent,
    CreateEmployeeComponent,
    ShowEmployeeComponent,
    CreateManagerCommentComponent,
    ShowManagerCommentComponent,
    ShowProjectComponent,
    CreateProjectComponent,
    ShowTaskComponent,
    CreateTaskComponent,
    ShowUserStoryComponent,
    CreateUserStoryComponent,
    EditEmployeeComponent,
    ViewEmployeeComponent,
    EditProjectComponent,
    ViewProjectComponent,
    DeleteEmployeeComponent,
    DeleteProjectComponent,
    EditTaskComponent,
    DeleteTaskComponent,
    ViewTaskComponent,
    EditUserStoryComponent,
    DeleteUserStoryComponent,
    ViewUserStoryComponent,
    EditManagerCommentComponent,
    DeleteManagerCommentComponent,
    ViewManagerCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    EmployeeService,
    ProjectService,
    TaskService,
    UserStoryComponent,
    ManagerCommentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
