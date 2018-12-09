import { Component, OnInit } from '@angular/core';
import {CommentsService} from '../Services/comments.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.css']
})
export class UserCommentsComponent implements OnInit {
  myComments = [ ];
  userId;
  constructor(private route: ActivatedRoute, private commentsService: CommentsService) {
    //const user = JSON.parse(localStorage.getItem("user"));
    this.route.params.subscribe(params => this.setParams(params.uid));
    this.myComments = commentsService.getMyComments(this.userId).then(res => {
      this.myComments = res;
    });
  }

  setParams(uid) {
    this.userId = uid;
  }


  ngOnInit() {

  }

}
