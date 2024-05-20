import { Component } from '@angular/core';
import { CartService } from '../../shared/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  cartItems: any[] = []



  products: any[] = [
    { name: 'Panes', precio: 45 },
    { name: 'Pasteles', precio: 60 },
    { name: 'Galletas', precio: 80 }

  ];


  constructor(private readonly CartService: CartService) { }

  ngOnInir(): void {
    this.CartService.getItems().subscribe(items => this.cartItems = items);
  }

  onclickAdd(item: any): void {
    this.CartService.addItems(item).subscribe(items => this.cartItems = items);
  }

  onclickDelet(itemId: number): void {
    this.CartService.removeItems(itemId).subscribe(() => console.log("Eliminado Corectamente "));
  }

  onClickClear(): void {
    this.CartService.clearCart().subscribe(() => console.log("Eliminado Toda la lista Corectamente "));
  }


  addToCart(product: any): void {
    this.CartService.addItems(product);
  }

}
