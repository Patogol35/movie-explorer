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
  title: 'El Rey León',
  year: 1994,
  genres: ['Animation','Adventure'],
  posterUrl: 'https://i.pinimg.com/736x/8d/69/98/8d699861805ba098b3d7a5097eff2bce.jpg',
  overview: 'Simba debe enfrentar traición y asumir su destino como rey.',
  rating: 8.5,
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
  posterUrl: 'https://i.pinimg.com/736x/77/4a/a5/774aa501b0a9add260bd93d716a77420.jpg',
  overview: 'Goku y Vegeta enfrentan a Broly, un Saiyajin con un poder abrumador, en una batalla épica que redefine sus límites.',
  rating: 8.1,
},
    {
  id: 15,
  title: 'El Viaje de Chihiro',
  year: 2001,
  genres: ['Fantasy','Adventure','Anime'],
  posterUrl:'https://www.lavanguardia.com/peliculas-series/images/all/movie/posters/2001/7/movie-129/w1280/RTVpv1HmdbMi7iPpVURuCupTW4.jpg',
  overview: 'Chihiro, una niña de 10 años, queda atrapada en un mundo mágico gobernado por dioses y espíritus. Para salvar a sus padres y regresar al mundo humano, debe encontrar su valor y madurar en el proceso.',
  rating: 8.6,
    },
    
    {
  id: 16,
  title: 'Chiquita',
  year: 2025,
  genres: ['Adventure'],
  posterUrl:'https://scontent.fuio1-2.fna.fbcdn.net/v/t39.30808-6/538077532_1123637219869974_2509855717755857570_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=x75ehI-8b68Q7kNvwErlDtv&_nc_oc=AdkSHD1Xx6v-rbXHXQDQi_6bYkgO1c0VsKSiN5OIcjdyE5yH_ukvt0WQEaUoWyTPoSnkcrdf0SJrvdEi2gXREsr2&_nc_zt=23&_nc_ht=scontent.fuio1-2.fna&_nc_gid=3C9gtF8aA1QMAHRBNOTJoA&oh=00_AfXqOb9iznQrK9kksxU4kG8DvzxU5PQYLtJNWpDJ6pABdg&oe=68B06209',
  overview: 'Aventuras de Chiquita',
  rating: 9.0,
    },
    
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
