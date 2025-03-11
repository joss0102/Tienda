/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component'; // Importamos el componente raíz
import { HttpClientModule } from '@angular/common/http';

import {
  ArcElement,
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  DoughnutController,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PieController,
  PointElement,
  Tooltip
} from 'chart.js';
import { importProvidersFrom } from '@angular/core';

// Arrancamos la aplicación desde AppComponent
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),  // Proveer las rutas definidas en app.routes.ts
    ReactiveFormsModule,     // Asegurarnos de que ReactiveFormsModule esté disponible
    importProvidersFrom(HttpClientModule)
  ]
}).catch(err => console.error(err));

// Configuración de gráficos con Chart.js
Chart.register(
  ArcElement, PieController, DoughnutController, Legend, Tooltip,
  BarController, BarElement, CategoryScale, LinearScale, LineElement, LineController, PointElement
);
