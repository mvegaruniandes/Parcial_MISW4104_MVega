import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeListComponent } from './coffee-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CoffeeListComponent],
  exports: [CoffeeListComponent],
})
export class CoffeeListModule {}
