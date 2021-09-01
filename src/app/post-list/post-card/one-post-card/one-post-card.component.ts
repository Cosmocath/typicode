import { Identifiers } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/shared/models/post';
import { PostService } from '../shared/services/post.service';

@Component({
  selector: 'app-one-post-card',
  templateUrl: './one-post-card.component.html',
  styleUrls: ['./one-post-card.component.css']
})
export class OnePostCardComponent implements OnInit {
  id!: number;
  @Input() post!: Post;

  constructor(private router : ActivatedRoute) { }

  private getOnePost(id:number){
    this.postService.getPosts()
  }

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
    this.id= params.id
    })

  }

}
