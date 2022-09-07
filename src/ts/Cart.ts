import Buyable from './Buyable';
import cartItem from './cartItem';

export default class Cart {
    private _items: cartItem[] = [];

    add(item: Buyable): void {

        if (this._items.findIndex(el => el.object === item) === -1) {
            this._items.push(new cartItem(item, 1));
        }
        else if (this._items.findIndex(el => el.object === item) !== -1 && item.isDigital) {
            throw new Error(`Цифровой товар ${item.title} уже был в корзине`);
        }
        else if (this._items.findIndex(el => el.object === item) !== -1 && !item.isDigital) {
            this._items[this._items.findIndex(el => el.object === item)].quantity++
        }
    }

    get items(): cartItem[] {
        return [...this._items];
    }

    totalAmount(): number {
        let amount = 0;
        for (const item of this._items) {
            amount += item.object.price * item.quantity
        }
        return amount
    }

    totalAmountWitDiscount(discount: number): number {
        return this.totalAmount() * discount / 100;
    }

    delete(id: number): void {
        for (let index = this._items.length; index--;) {
            if (this._items[index].object.id === id && this._items[index].quantity === 1) {
                this._items.splice(index, 1);
                return
            } else if (this._items[index].object.id === id && this._items[index].quantity > 1) {
                this._items[index].quantity--;
                return
            }
            throw new Error(`Товара с id ${id} нет в корзине`);
        }
    }
}
