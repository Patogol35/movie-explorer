export interface Movie {
  id: number;
  title: string;
  year: number;
  genres: string[];
  posterUrl: string;
  overview: string;
  rating: number; // 0–10
}