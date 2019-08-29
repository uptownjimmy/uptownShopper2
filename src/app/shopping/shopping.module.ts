// form-list-item module
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ShoppingListComponent } from './list/list.component';
import { ShoppingItemOptionsPopover } from './options/options.popover';
import { ShoppingListUpdateModalComponent } from './update/update.modal';

@NgModule({
  imports: [
    IonicModule, CommonModule, FormsModule, ReactiveFormsModule,
    RouterModule.forChild([{ path: 'shopping', component: ShoppingListComponent }]),
  ],
  declarations: [ShoppingListComponent, ShoppingItemOptionsPopover, ShoppingListUpdateModalComponent],
  entryComponents: [ShoppingItemOptionsPopover, ShoppingListUpdateModalComponent],
})
export class ShoppingModule {}
