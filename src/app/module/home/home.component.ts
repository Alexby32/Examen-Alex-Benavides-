import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  items :any[]= [];

  constructor( private Cartservices: CartService) {

  }

  ngOnInit():void {
  
    //inyecte aca 
    this.items = this.Cartservices.getItems()
  }
}
