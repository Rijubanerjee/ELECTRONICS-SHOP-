import { Customer } from "./customer";

export class Orderproducts {
    orderId:number;
    orderDate:string;
    customer:Customer = undefined;
    totalCost:number;
    orderStatus:string;
}
