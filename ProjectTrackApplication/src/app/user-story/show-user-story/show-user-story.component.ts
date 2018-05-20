import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { UserStoryService } from '../../services/user-story.service';

@Component({
  selector: 'app-show-user-story',
  templateUrl: './show-user-story.component.html',
  styleUrls: ['./show-user-story.component.css']
})
export class ShowUserStoryComponent implements OnInit {
  
  constructor(private userStoryService : UserStoryService, private http:HttpClient) { }

  stories;

  ngOnInit() {

    this.userStoryService.getAllUserStories();

    this.userStoryService.stories$.subscribe(
      data => {
        this.stories = data;
        console.log(this.stories);
      }
    );

    this.userStoryService.ErrorResponse$.subscribe(
      message => {
        console.log(message);
        alert(message);
      }
    );

  }

}
