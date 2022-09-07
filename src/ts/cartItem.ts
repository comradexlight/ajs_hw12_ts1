import Buyable from './Buyable';

export default class cartItem {
    readonly object: Buyable;
    quantity: number;
    constructor(object: Buyable, quantity: number) {
        this.object = object;
        this.quantity = quantity;
    }
}
