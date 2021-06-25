import { Category } from "./category";

export class Product {
    prodId : number;
    code : string;
    name : string;
    price : number;
    image : string;
    stock : number;
    createDate : string;
    category: Category=undefined;
}
