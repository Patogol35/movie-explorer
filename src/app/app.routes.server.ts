import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',              // ✅ prerenderiza solo la home
    renderMode: RenderMode.Prerender
  },
  {
    path: 'movie/:id',     // 🚀 ruta dinámica => SSR bajo demanda
    renderMode: RenderMode.Server
  },
  {
    path: '**',            // 🌐 todas las demás rutas => SSR dinámico
    renderMode: RenderMode.Server
  }
];
