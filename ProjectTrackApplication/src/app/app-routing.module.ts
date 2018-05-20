import { NgModule } from '@angular/core';
// give manually for routing purpose ie., created module for routing and imported angular router
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component'; // copy from aapmodule.ts after creating component
import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';
import { UserStoryComponent } from './user-story/user-story.component';
import { TaskComponent } from './task/task.component';
import { ManagerCommentComponent } from './manager-comment/manager-comment.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ShowEmployeeComponent } from './employee/show-employee/show-employee.component';
import { ShowManagerCommentComponent } from './manager-comment/show-manager-comment/show-manager-comment.component';
import { CreateManagerCommentComponent } from './manager-comment/create-manager-comment/create-manager-comment.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { ShowProjectComponent } from './project/show-project/show-project.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { ShowTaskComponent } from './task/show-task/show-task.component';
import { CreateUserStoryComponent } from './user-story/create-user-story/create-user-story.component';
import { ShowUserStoryComponent } from './user-story/show-user-story/show-user-story.component';
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

// in const route class declaring route for all components
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: []
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    children: [
      {
        path: 'showEmployee',
        component: ShowEmployeeComponent,
        children: []
      },
      {
        path: 'create',
        component: CreateEmployeeComponent,
        children: []
      },
      {        
        path: 'edit/:id',
        component: EditEmployeeComponent,
        children: []
      },
      {        
        path: 'view/:id',
        component: ViewEmployeeComponent,
        children: []
      },
      {        
        path: 'delete/:id',
        component: DeleteEmployeeComponent,
        children: []
      },
      {
        path: '',
        redirectTo: '/employee/showEmployee',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'project',
    component: ProjectComponent,
    children: [
      {
        path: 'showProject',
        component: ShowProjectComponent,
        children: []
      },
      {
        path: 'createProject',
        component: CreateProjectComponent,
        children: []
      },
      {
        path: 'edit/:id',
        component: EditProjectComponent,
        children: []
      },
      {
        path: 'view/:id',
        component: ViewProjectComponent,
        children: []
      },
      {
        path: 'delete/:id',
        component: DeleteProjectComponent,
        children: []
      },
      {
        path: '',
        redirectTo: '/project/showProject',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'userStory',
    component: UserStoryComponent,
    children: [
      {
        path: 'showUserStory',
        component: ShowUserStoryComponent,
        children: []
      },
      {
        path: 'createUserStory',
        component: CreateUserStoryComponent,
        children: []
      },
      {
        path: 'edit/:id',
        component: EditUserStoryComponent,
        children: []
      },
      {
        path: 'delete/:id',
        component: DeleteUserStoryComponent,
        children: []
      },
      {
        path: 'view/:id',
        component: ViewUserStoryComponent,
        children: []
      },
      {
        path: '',
        redirectTo: '/userStory/showUserStory',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'task',
    component: TaskComponent,
    children: [
      {
        path: 'showTask',
        component: ShowTaskComponent,
        children: []
      },
      {
        path: 'createTask',
        component: CreateTaskComponent,
        children: []
      },
      {
        path: 'edit/:id',
        component: EditTaskComponent,
        children: []
      },
      {
        path: 'delete/:id',
        component: DeleteTaskComponent,
        children: []
      },
      {
        path: 'view/:id',
        component: ViewTaskComponent,
        children: []
      },
      {
        path: '',
        redirectTo: '/task/showTask',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'managerComment',
    component: ManagerCommentComponent,
    children: [
      {
        path: 'showManagerComment/:id',
        component: ShowManagerCommentComponent,
        children: []
      },
      {
        path: 'create/:id',
        component: CreateManagerCommentComponent,
        children: []
      },
      {
        path: 'edit/:id',
        component: EditManagerCommentComponent,
        children: []
      },
      {
        path: 'delete/:id',
        component: DeleteManagerCommentComponent,
        children: []
      },
      {
        path: 'view/:id',
        component: ViewManagerCommentComponent,
        children: []
      },
      {
        path: '',
        redirectTo: '/managerComment/showManagerComment',
        pathMatch: 'full'
      }
    ]
  },
]

@NgModule({
  // inorder to iterate through various routes it is being imported and exported
  imports: [RouterModule.forRoot(routes)],
  //CommonModule --> this was default one in imports   bt we need to use the new route module
  //export this child route module to higher module
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
