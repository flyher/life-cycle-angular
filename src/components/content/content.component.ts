import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { Content } from "../../model/content.model";

const content: Content = {
  info: 'Press F12 to debug'
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})

export class ContentComponent implements OnInit, OnDestroy {
  content = content;
  @Input() newContent: string;

  constructor() { }

  ngOnChanges() { }

  // 每个接口都有唯一的一个钩子方法，它们的名字是由接口名再加上ng前缀构成的。比如，OnInit接口的钩子方法叫做ngOnInit
  ngOnInit() {
    this.showMsg('ngOnInit');
  }

  ngDoCheck() {
    this.showMsg('ngDoCheck');
  };

  ngOnDestroy() {
    this.showMsg('ngOnDestory');
  };

  showMsg(message: string): void {
    console.log(message);
  }

  addContent(): void {
    this.content.info = this.newContent.trim();
  }
}