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
<<<<<<< HEAD
import { NewsapiPage } from '../pages/newsapi/newsapi';

//Service
=======
>>>>>>> 1e0b4fbe1b40beff1838dedd51f58d9c0d81bad1
import { NewsApiService } from '../services/newsapi.service'


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage,
<<<<<<< HEAD
    NewsapiPage,

=======
>>>>>>> 1e0b4fbe1b40beff1838dedd51f58d9c0d81bad1
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
<<<<<<< HEAD
    NewsapiPage,
=======
>>>>>>> 1e0b4fbe1b40beff1838dedd51f58d9c0d81bad1
  ],
  providers: [
    NewsApiService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
