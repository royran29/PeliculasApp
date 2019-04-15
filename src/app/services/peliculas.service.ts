import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey = '125c08ec7a147cb590406a7e04c754b9';
  private moviesDbUrl = 'https://api.themoviedb.org/3'; // movie/550

  // path para imagenes image.tmdb.org/t/p/w300/

  constructor(private _http: HttpClient) { }

  getCartelera() {

    const desde = new Date();
    const hasta = new Date();
    hasta.setDate( hasta.getDate() + 7 );

    const desdeStr = `${desde.getFullYear()}-${desde.getMonth() + 1}-${desde.getDate()}`;
    const hastaStr = `${hasta.getFullYear()}-${hasta.getMonth() + 1}-${hasta.getDate()}`;

    const url = `${ this.moviesDbUrl }/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this._http.jsonp(url, '').pipe(map(data => data.results));
  }

  getPopulares() {
    const url = `${ this.moviesDbUrl }/discover/movie?sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this._http.jsonp(url, '').pipe(map(data => data.results));
  }

  getPopularesKids() {
    const url = `${ this.moviesDbUrl }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this._http.jsonp(url, '').pipe(map(data => data.results));
  }

  buscarPelicula(texto: string){
    const url = `${ this.moviesDbUrl }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this._http.jsonp(url, '').pipe(map(data => data.results));
  }
}
