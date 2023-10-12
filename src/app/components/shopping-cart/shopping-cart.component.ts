import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service'; // Import CartService
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  contactForm: FormGroup;
  cart: Product[] = [];
  total: number = 0;

  constructor(
    private cartService: CartService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.minLength(4)]],
      email: ['', [Validators.minLength(4)]],
      address: ['', [Validators.minLength(4)]],
    });
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCartContents(); // Get cart contents
    this.total = this.cartService.getTotalPrice(); // Get total price
  }

  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product); // Remove a product from the cart
    this.cart = this.cartService.getCartContents(); // Update cart contents
    this.total = this.cartService.getTotalPrice(); // Update total price
  }

  completeCheckout(): void {
    if (!this.contactForm.invalid && this.cartService.getTotalItem() > 0) {
      this.cartService.clearCart();
      this.router.navigate(['/success-order']);
    }
  }
}
