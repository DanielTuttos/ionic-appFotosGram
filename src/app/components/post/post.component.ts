import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/pages/interfaces/interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input() post: Post = {};

  slideSoloOps = {
    allowSlideNext: false,
    allowSlidePrev: false
  }


  constructor() { }

  ngOnInit() { }

}
