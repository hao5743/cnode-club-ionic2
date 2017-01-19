import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { WritePage,HomePage,TopicPage,UserPage,MePage,TabsPage,NewTopic,LoginPage,MessagePage,SettingPage,AboutPage } from '../page/index';
import { TestPipe,TopicTab,Moment } from '../pipe/index';
import { Api,DataApi,Config,Local,Tip } from '../provider/index';
import { TopicItemComponent,TopicContentComponent } from '../component/index';

import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    //pages
    MePage,
    WritePage,
    HomePage,
    TabsPage,
    TopicPage,
    UserPage,
    NewTopic,
    LoginPage,
    MessagePage,
    SettingPage,
    AboutPage,
    //components
    TopicContentComponent,
    TopicItemComponent,
    //pipes
    TestPipe,
    TopicTab,
    Moment
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MePage,
    WritePage,
    HomePage,
    TabsPage,
    TopicPage,
    UserPage,
    NewTopic,
    LoginPage,
    MessagePage,
    SettingPage,
    AboutPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Config,
    Api,
    Local,
    DataApi,
    Tip,
    Storage
  ]
})
export class AppModule {}
