import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { NewsApiGlobal } from '../../models/newsapi-global.model'
import{ NewsApiService } from '../../services/newsapi.service';

@Component({
  selector: 'page-newsapi',
  templateUrl: 'newsapi.html'
})
export class NewsapiPage {
  news: NewsApiGlobal = new NewsApiGlobal();

  constructor(private newsApiService : NewsApiService) {
    console.log("Hello World");
    this.getArticles(null)
    console.log("this.news");
    
  }

  // Chargement des articles
  public getArticles(refresher) {
    this.newsApiService.getArticles()
    .then(newsFetched => {
      this.news = newsFetched;
      console.log(this.news);
      // Si la variable refresher est null alors on ne fait rien
      (refresher) ? refresher.complete() : null;
      console.log('Données récupérées depuis le serveur !');
    });
  }
}
