import Movie from 'src/app/models/movie/movie.module';
import { MovieService } from './../../services/movie.service';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css'],
})
export class MovieFormComponent {
  constructor(private movieService: MovieService) {}
  sortingType: keyof Movie | '' = '';
  movies: Movie = {
    id: 0,
    title: '',
    description: '',
  };

  @Output('movie')
  movieAdded = new EventEmitter<Movie>();

  addMovie(event: Event) {
    event.preventDefault();
    this.movieAdded.emit(this.movies);
    this.movies = {
      id: 0,
      title: '',
      description: '',
    };
  }
}
