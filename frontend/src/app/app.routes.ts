import {RouterModule, Routes} from '@angular/router';

import {LayoutComponent} from './cliente/layout/layout.component';
import {LayoutBackComponent} from './backoffice/layout/layout.component';

import {HomeComponent} from './cliente/home/home.component';
import {LoginComponent} from './cliente/user/login/login.component';
import {RegistroComponent} from './cliente/user/registro/registro.component';
import {TiendaComponent} from './cliente/show-products/tienda/tienda.component';
import {ControlPanelComponent} from './backoffice/control-panel/control-panel.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { CarritoComponent } from './cliente/purchase/carrito/carrito.component';
import { ProfileComponent } from './backoffice/profile/profile.component';
import {publicGuard} from './services/guards/public.guard';
import { MyProductsComponent } from './backoffice/products/my-products/my-products.component';

import { InfoShowComponent } from './cliente/show-products/info-show/info-show.component';
import { adminGuard } from './services/guards/admin-guard.guard';

import { ProfileClienteComponent } from './cliente/user/profile-cliente/profile-cliente.component';



export const routes: Routes = [

  // cliente
  // localhost:4200 -> www.ejemplo.com
  {
    path: "", component: LayoutComponent, children: [ // -> www.ejemplo.com
      {path: "", component: HomeComponent}, // -> www.ejemplo.com
      {path: "login", component: LoginComponent, canActivate: [publicGuard]}, // -> www.ejemplo.com/login
      {path: "registro", component: RegistroComponent}, // -> www.ejemplo.com/registro
      {path: "tienda", component: TiendaComponent}, // www.ejemplo.com/tienda
      {path: "home", component: HomeComponent},
      {path: "carrito", component: CarritoComponent},
      { path: 'show-info/:id', component: InfoShowComponent }, // Acepta un ID
      {path: "profile-cliente", component: ProfileClienteComponent},
    ]
  },
  // backoffice
  // www.ejemplo.com/app
  {
    path: "app", component: LayoutBackComponent, children: [ // -> www.ejemplo.com/app
      // www.ejemplo.com/app -> no hay parámetros después del app, por lo tanto angular buscar dentro de esta sección de children el path que esté vacío ""

      {path: "", redirectTo: "control-panel", pathMatch: "full"}, // -> www.ejemplo.com/app
      {path: "control-panel", component: ControlPanelComponent,canActivate: [adminGuard]}, // -> www.ejemplo.com/app/control-panel
      {path: "profile", component: ProfileComponent,canActivate: [adminGuard]},
      {path: "products", component: MyProductsComponent,canActivate: [adminGuard]},
    ]
  },

  // Si el usuario introduce una url que no existe en la parte superior
  {path: "**", component: PageNotFoundComponent},
];













