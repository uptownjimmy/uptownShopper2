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
    path: 'items',
    outlet: 'items',
    component: ItemListComponent,
  },
  {
    path: 'stores',
    outlet: 'stores',
    component: StoreListComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
