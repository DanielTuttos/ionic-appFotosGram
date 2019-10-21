import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  posts: Post[] = [];

  habilitado = true;

  refresh: boolean = true;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.siguientes();
    this.postsService.nuevoPost
      .subscribe(post => {
        this.posts.unshift(post);
      });
  }

  recargar(event) {

    this.siguientes(event, true);
    this.posts = [];
    this.habilitado = true;
    this.refresh = false;
    setTimeout(() => {
      this.refresh = true;
    }, 3000);

  }

  siguientes(event?, pull: boolean = false) {

    this.postsService.getPosts(pull)
      .subscribe(res => {
        console.log(res);
        this.posts.push(...res.posts);

        if (event) {
          event.target.complete();

          if (res.posts.length === 0) {
            this.habilitado = false;
            //event.target.disabled = true;
          }

        }

      })
  }

}
