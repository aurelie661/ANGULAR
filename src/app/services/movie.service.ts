import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
    private $movie = new BehaviorSubject<string[]>([]);
    constructor() {}
  
    getMovies(): Observable<string[]> {
      return this.$movie.asObservable();
    }
  
    addMovie(movie: string) {
      const currentMovie = this.$movie.getValue();
      currentMovie.push(movie);
      this.$movie.next(currentMovie);
    }
  
    updateMovie(index: number, updatedMovie: string) {
      const currentMovie = this.$movie.getValue();
      currentMovie[index] = updatedMovie;
      this.$movie.next(currentMovie);
    }
  
    deleteMedia(index: number) {
      const currentMovie = this.$movie.getValue();
      currentMovie.splice(index, 1);
      this.$movie.next(currentMovie);
    }
}
