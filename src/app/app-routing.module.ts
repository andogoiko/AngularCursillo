import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) }, //lazy loading, llama al módulo cuando lo necesita y este carga los datos al componente para que se muestren
  {path: '**', redirectTo: '', pathMatch: 'full'} //esta ruta de 404 siempre debe de ser la última, sino saltará a aquí siempre
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
