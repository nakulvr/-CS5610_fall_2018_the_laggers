import { Component, OnInit } from '@angular/core';
import {CommentsService} from '../Services/comments.service';

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.css']
})
export class UserCommentsComponent implements OnInit {
  myComments = [ ];

  constructor(private commentsService: CommentsService) {
    const user = JSON.parse(localStorage.getItem("user"));
    this.myComments = commentsService.getMyComments(user.id).then(res => {
      this.myComments = res;
    });
  }

  ngOnInit() {

  }

}
