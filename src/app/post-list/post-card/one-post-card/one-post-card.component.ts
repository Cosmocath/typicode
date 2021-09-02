import { Identifiers } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/shared/models/post';
import { PostService } from 'src/app/shared/services/post.service';


@Component({
  selector: 'app-one-post-card',
  templateUrl: './one-post-card.component.html',
  styleUrls: ['./one-post-card.component.css']
})
export class OnePostCardComponent implements OnInit {
  id!: number;
  @Input() post!: Post;
  

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  private getOnePost(id: number): void {
    this.postService.getOnePost(id).subscribe((post: Post) => {
      this.post = post;
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getOnePost(this.id);
  }



}
