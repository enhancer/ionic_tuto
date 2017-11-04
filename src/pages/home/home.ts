import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { NewsApiGlobal } from '../../models/newsapi-global.model'
import{ NewsApiService } from '../../services/newsapi.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nom : string;
  prenom : string;
  age : number;
  news: NewsApiGlobal = new NewsApiGlobal();

  constructor(public navCtrl: NavController , public alertCtrl: AlertController, private newsApiService : NewsApiService) {
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

  alertAction(): void{
    console.log("appuyer bouton");
  }

  showAlert() : void {
    let alert = this.alertCtrl.create({
      title: 'Pop Up',
      subTitle: 'pop up fonctionne',
      buttons: ['OK']
    });
    alert.present();
  }

  private showDetails(){
    console.log(this.nom);
    console.log(this.prenom);
    console.log(this.age);
    this.navCtrl.push(DetailsPage, {nom : this.nom, prenom : this.prenom, age:this.age});
  }
}
