import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs';

@Component({
  selector: 'hinv-root-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  comments$ = this.commentService.getComments();

  comment$ = this.activatedRouter.data.pipe(pluck('comments'));

  constructor(private commentService: CommentService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    //this.activatedRouter.data.subscribe(data => console.log(data['comments']));
  }
}
