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

  getPopulares() {
    const url = `${ this.moviesDbUrl }/discover/movie?sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this._http.jsonp(url, '').pipe(map(data => data));
  }

  buscarPelicula(texto: string){
    const url = `${ this.moviesDbUrl }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this._http.jsonp(url, '').pipe(map(data => data));
  }
}
