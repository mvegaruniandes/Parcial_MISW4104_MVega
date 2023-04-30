import { Component, OnInit } from '@angular/core';
import { CoffeeList } from './CoffeeList';
import { dataCoffees } from './dataCoffees';
import { CoffeeListServiceService } from './coffeeListService.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css'],
})
export class CoffeeListComponent implements OnInit {
  constructor(private coffeeListService: CoffeeListServiceService) {}
  coffeeList: Array<CoffeeList> = [];

  getCoffeeList() {
    this.coffeeListService.getCoffeeList().subscribe((coffees) => {
      this.coffeeList = coffees;
    });
  }
  ngOnInit() {
    this.getCoffeeList();
  }
}
