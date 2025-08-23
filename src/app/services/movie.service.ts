import { Injectable, signal, computed } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({ providedIn: 'root' })
export class MovieService {
  // Catálogo de películas conocidas con posters reales
  private readonly _movies = signal<Movie[]>([
    {
      id: 1,
      title: 'Titanic',
      year: 1997,
      genres: ['Romance', 'Drama'],
      posterUrl: 'https://storage.googleapis.com/pod_public/750/266355.jpg',
      overview: 'Un romance florece a bordo del Titanic, el transatlántico condenado.',
      rating: 7.9,
    },
    {
      id: 2,
      title: 'The Matrix',
      year: 1999,
      genres: ['Sci-Fi', 'Action'],
      posterUrl: 'https://storage.googleapis.com/pod_public/800webp/105083.webp',
      overview: 'Neo descubre la verdad detrás de la realidad y lucha contra las máquinas.',
      rating: 8.7,
    },
    {
      id: 3,
      title: 'Inception',
      year: 2010,
      genres: ['Sci-Fi', 'Thriller'],
      posterUrl: 'https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg',
      overview: 'Un ladrón roba secretos a través de los sueños y enfrenta su misión más peligrosa.',
      rating: 8.8,
    },
  
    
    
    {
      id: 6,
      title: 'Forrest Gump',
      year: 1994,
      genres: ['Drama', 'Romance'],
      posterUrl: 'https://storage.googleapis.com/pod_public/800webp/266241.webp',
      overview: 'La vida de Forrest Gump, un hombre sencillo que influye en eventos históricos.',
      rating: 8.8,
    },
    {
      id: 7,
      title: 'Interstellar',
      year: 2014,
      genres: ['Sci-Fi', 'Drama'],
      posterUrl: 'https://storage.googleapis.com/pod_public/800webp/263130.webp',
      overview: 'Exploradores viajan por un agujero de gusano en busca de un nuevo hogar para la humanidad.',
      rating: 8.6,
    },
    {
      id: 8,
      title: 'Gladiator',
      year: 2000,
      genres: ['Action', 'Drama'],
      posterUrl: 'https://storage.googleapis.com/pod_public/800webp/266246.webp',
      overview: 'Un general romano busca venganza tras ser traicionado y esclavizado.',
      rating: 8.5,
    },
    {
      id: 9,
      title: 'The Godfather',
      year: 1972,
      genres: ['Crime', 'Drama'],
      posterUrl: 'https://storage.googleapis.com/pod_public/800webp/262788.webp',
      overview: 'La historia de la familia Corleone, un poderoso clan de la mafia en Nueva York.',
      rating: 9.2,
    },
    {
      id: 10,
      title: 'Avengers: Endgame',
      year: 2019,
      genres: ['Action', 'Sci-Fi'],
      posterUrl: 'https://storage.googleapis.com/pod_public/800webp/262967.webp',
      overview: 'Los Vengadores luchan contra Thanos en una batalla final para salvar el universo.',
      rating: 8.4,
    },

        {
       id: 11,
    title: 'Jurassic Park',
    year: 1993,
    genres: ['Adventure', 'Sci-Fi', 'Thriller'],
    posterUrl: 'https://storage.googleapis.com/pod_public/800webp/266264.webp',
    overview: 'Un parque temático con dinosaurios clonados se convierte en un lugar de supervivencia cuando las criaturas escapan.',
    rating: 8.2,
    },

       {
       id: 12,
  title: 'The Blair Witch Project',
  year: 1999,
  genres: ['Horror', 'Mystery', 'Thriller'],
  posterUrl: 'https://storage.googleapis.com/pod_public/800webp/243866.webp',
  overview: 'Tres estudiantes de cine se adentran en un bosque de Maryland para filmar un documental sobre la leyenda de la Bruja de Blair, y desaparecen misteriosamente.',
  rating: 6.5,
    },

  {
      id: 13,
      title: 'Avatar',
      year: 2009,
      genres: ['Sci-Fi', 'Adventure'],
      posterUrl: 'https://storage.googleapis.com/pod_public/800webp/262964.webp',
      overview: 'Un exmarine se une a los Na’vi en Pandora para proteger su mundo.',
      rating: 7.9,
    },

{
  id: 14,
  title: 'Dragon Ball Super: Broly',
  year: 2018,
  genres: ['Action','Anime'],
  posterUrl: 'https://www.impawards.com/intl/japan/2018/dragon_ball_super_broly_xlg.jpg',
  overview: 'Goku y Vegeta enfrentan a Broly, un Saiyajin con un poder abrumador, en una batalla épica que redefine sus límites.',
  rating: 8.1,
}
    
  ]);

  readonly movies = computed(() => this._movies());

  getAllGenres(): string[] {
    const set = new Set<string>();
    this._movies().forEach(m => m.genres.forEach(g => set.add(g)));
    return Array.from(set).sort();
  }

  getById(id: number): Movie | undefined {
    return this._movies().find(m => m.id === id);
  }
}
