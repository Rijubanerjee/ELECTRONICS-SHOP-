import { Customer } from "./customer";

export class Bankacc {
    bankId:number;
    cardNumber:number;
    customer:Customer = undefined;
    cardHolderName:number;
    expiryDt:string;
    cvv:number;
    amount:number;
}
