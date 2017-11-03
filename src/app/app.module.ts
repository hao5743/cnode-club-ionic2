import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicStorageModule } from '@ionic/storage'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { MyApp } from './app.component';
import * as page from '../page/index';
import * as pipe from '../pipe/index';
import * as provider from '../provider/index';
import * as component from '../component/index';
//自动引入index中的组件、管道等，避免重复书写
const mypages = Object.keys(page).map(e => page[e]);
const mypipes = Object.keys(pipe).map(e => pipe[e]);
const myproviders = [...Object.keys(provider).map(e => provider[e]), ];
const mycomponents = Object.keys(component).map(e => component[e]);

@NgModule({
    declarations: [MyApp, ...mypages, ...mycomponents, ...mypipes],
    imports: [

        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp, {
            tabsPlacement: 'bottom',
            backButtonText: '返回'
        }),
        IonicStorageModule.forRoot()
    ],
    bootstrap: [IonicApp],
    entryComponents: [...mypages],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        Storage, ...myproviders]
})
export class AppModule {}
