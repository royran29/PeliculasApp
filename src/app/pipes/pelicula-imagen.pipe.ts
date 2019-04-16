import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {

  transform(pelicula: any, poster: boolean = false): any {
    let img = 'http://image.tmdb.org/t/p/w300';

    if (poster) {
      return img += pelicula.poster_path;
    }

    if (pelicula.backdrop_path) {
      img += pelicula.backdrop_path;
    } else {
      if (pelicula.poster_path) {
        img += pelicula.poster_path;
      } else {
        img = 'assets/img/noimage.jpg';
      }
    }
    return img;
  }

}
