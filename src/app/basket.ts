import { Customer } from "./customer";
import { Product } from "./product";

export class Basket {
    basketId : number;
    cust : Customer=undefined;
    productDetails : Product = new Product();

}
