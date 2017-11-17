import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { SQLite } from '@ionic-native/sqlite';
import { MyApp } from './app.component';
import { NativeStorage } from '@ionic-native/native-storage';

// Pages
import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';
import { NewsapiPage } from '../pages/newsapi/newsapi';
import { NativeStoragePage } from '../pages/native-storage/native-storage';
import { SqlitePage } from '../pages/sqlite/sqlite';

//Service
import { NewsApiService } from '../services/newsapi.service'


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage,
    NewsapiPage,
    SqlitePage,
    NativeStoragePage,

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
    SqlitePage,
    NativeStoragePage,
  ],
  providers: [
    NewsApiService,
    StatusBar,
    SplashScreen,
    SQLite,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
