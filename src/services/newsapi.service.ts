/*
* Un exemple d'implmentation d'un service au sein d'angular
*/

// Core components
import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';
import { NewsApiGlobal } from '../models/newsapi-global.model';


// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class NewsApiService {
	private baseUrl : string = 'https://newsapi.org/v1/';
	private source : string = 'hacker-news';
	private apiKey : string = '4985d9a4ca424521a6f2c0930007d3e7';

	constructor(private http: Http) {
		
		}


	public getArticles() : Promise<NewsApiGlobal>{

		const url = `${this.baseUrl}articles?source=${this.source}&sortBy=latest&apiKey=${this.apiKey}`;

		return this.http.get(url)
		.toPromise()
		.then(response => response.json() as NewsApiGlobal)
		.catch(error => console.log('Une erreur est survenue ' + error))

	 }
}
