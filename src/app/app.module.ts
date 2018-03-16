import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { LinkComponent } from '../components/shared/link/link.component';
import { ContentComponent } from '../components/content/content.component';

@NgModule({
  declarations: [
    // 引入所有定义的组件,ng2最新版本不允许在父component中使用directives来引入孩子组件(变化真快)
    // https://stackoverflow.com/questions/39410417/how-to-import-component-into-another-root-component-in-angular-2
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LinkComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    // 引入需要在index中显示的组件,不需要的话
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ]
})
export class AppModule { }
