import { Component } from '@angular/core';
import { iPost } from '../../Model/i-post';
import { iJSONresponse } from '../../Model/jsonresponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  primoPost!: iPost;
  arrPosts: iPost[] = [];

  ngOnInit(): void {
    fetch('db.json')
      .then((res) => <Promise<iJSONresponse>>res.json())
      .then((res) => {
        console.log(res);

        this.primoPost = res.posts[0];
        this.arrPosts = res.posts.slice(1, 5);
      })
      .catch((err) => console.log(err));
  }
}
