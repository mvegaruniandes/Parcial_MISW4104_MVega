import { Component, OnInit } from '@angular/core';
import { CoffeeList } from './CoffeeList';
import { dataCoffees } from './dataCoffees';
import { CoffeeListService } from './coffeeListService.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css'],
})
export class CoffeeListComponent implements OnInit {
  constructor(private coffeeListService: CoffeeListService) {}
  coffeeList: Array<CoffeeList> = [];

  getCoffeeList() {
    this.coffeeListService.getCoffeeList().subscribe((coffees) => {
      this.coffeeList = coffees;
    });
  }

  getBlend() {
    let sumBlend: number = this.coffeeList.filter(
      (item) => item.tipo === 'Café de Origen'
    ).length;
    return sumBlend;
  }

  getOrigen() {
    let sumOrigen: number = this.coffeeList.filter(
      (item) => item.tipo === 'Blend'
    ).length;

    return sumOrigen;
  }

  ngOnInit() {
    this.getCoffeeList();
    this.getBlend();
    this.getOrigen();
  }
}
