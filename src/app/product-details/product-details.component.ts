import { Component, OnInit } from "@angular/core";
//for the route link we have kept the acivated route
import { ActivatedRoute } from "@angular/router";
// we have to to keep the link on products , hence import the product component
import { products } from "../products";

//This section walks you through using the CartService to add a product to the cart.
import { CartService } from "../cart.service";

//Decorator
@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;

  //1.To make route link active and so that this component can access the service hence we have injected this interface namely activatedroute
  //2.Inject the cart service by adding it to the constructor().
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }
  //Define the addToCart() method, which adds the current product to the cart.

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert("The product has been added to the cart");
  }
}
