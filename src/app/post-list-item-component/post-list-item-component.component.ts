import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIt: number;
  @Input() postCreated_at: string;
  constructor() { }

  getPostTile() {
    return this.postTitle;
  }

  getPostContent() {
    return this.postContent;
  }

  onBtnSuccess () {
    this.postLoveIt++;
  }

  onBtnDanger () {
    this.postLoveIt--;
  }

  getPostCreated_at () {
    return this.postCreated_at;
  }

  ngOnInit() {
  }

}
