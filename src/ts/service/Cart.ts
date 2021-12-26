import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        let index = this._items.findIndex(e => e.id === item.id)
        if (index === -1 || !item.singleProduct) {
            this._items.push(item);
        }
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    amountWithoutDiscount(): number {
        let sum = 0
        for (const e of this._items) {
            sum += e.price
        }
        return sum
    }

    amountWithDiscount(discount: number): number {
        let sum = 0
        for (const e of this._items) {
            sum += e.price
        }
        return sum - (sum * discount / 100)
    }

    deleteItem(id: number): void {
        let index = this._items.findIndex(e => e.id === id)
        if (index === -1) return
        this._items.splice(index, 1)
    }
}