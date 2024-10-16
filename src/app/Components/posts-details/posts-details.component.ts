import { Component } from '@angular/core';
import { iPost } from '../../Model/i-post';
import { iJSONresponse } from '../../Model/jsonresponse';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrl: './posts-details.component.scss',
})
export class PostsDetailsComponent {
  post!: iPost;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      fetch('db.json')
        .then((res) => res.json() as Promise<iJSONresponse>)
        .then((res) => {
          const found = res.posts.find((p) => p.id == Number(params['id']));

          if (found) {
            this.post = found;
          } else {
            console.log('Post not found');
          }
        });
    });
  }
}
