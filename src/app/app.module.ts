import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';


import { MyApp } from './app.component';
// Pages
import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';
import { NewsapiPage } from '../pages/newsapi/newsapi';

//Service
import { NewsApiService } from '../services/newsapi.service'


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage,
    NewsapiPage,

  ],
  imports: [
    
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage,
    NewsapiPage,
  ],
  providers: [
    NewsApiService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
