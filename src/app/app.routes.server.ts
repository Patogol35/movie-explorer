import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',              // ✅ solo prerender la home
    renderMode: RenderMode.Prerender
  },
  {
    path: 'movie/:id',     // 🚀 ruta dinámica => SSR bajo demanda
    renderMode: RenderMode.Server
  }
];
