import { Component } from '@angular/core';
import { Link } from '../../../model/link.model';
import './link.component.less';

const Links: Array<Link> = [
  {
    id: 1,
    name: 'Home',
    url: '/home.html'
  },
  {
    id: 2,
    name: 'Music',
    url: '/music.html'
  },
  {
    id: 3,
    name: 'Video',
    url: '/video.html'
  }
];

@Component({
  selector: 'component-link',
  templateUrl: './link.compoent.html',
  // styleUrls: ['./link.component.less'] //https://github.com/angular/angular-cli/issues/7245
  // styleUrls: ['./link.component.css']
})

export class LinkComponent {
  link = Links;
}