import { Bankacc } from "./bankacc";
import { Orderproducts } from "./orderproducts";

export class Banktransaction {
    bankTxns:number;
    bankAcc:Bankacc = undefined;
    txnDate:string;
    txnAmount:number;
    orderproducts:Orderproducts = undefined;
}
