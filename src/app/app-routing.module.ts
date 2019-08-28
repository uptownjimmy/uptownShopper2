import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ItemListComponent } from './item/list/list.component';
import { ShoppingListComponent } from './shopping/list/list.component';
import { StoreListComponent } from './store/list/list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'shopping',
    pathMatch: 'full'
  },
  {
    path: 'shopping',
      outlet: 'shopping',
      component: ShoppingListComponent,
  },
  {
    path: 'pantry',
    loadChildren: () => import('./item/list/list.component').then(m => m.ItemListComponent)
  },
  {
    path: 'stores',
    loadChildren: () => import('./store/list/list.component').then(m => m.StoreListComponent)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
