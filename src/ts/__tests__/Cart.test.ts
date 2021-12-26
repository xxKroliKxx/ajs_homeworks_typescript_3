import Cart from '../service/Cart';
import Book from "../domain/Book";
import Electronic from "../domain/Electronic";

test('amountWithoutDiscount', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, true))
    expect(cart.amountWithoutDiscount()).toBe(2000);
});

test('amountWithoutDiscount', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, true))
    expect(cart.amountWithDiscount(10)).toBe(1800);
});

test('deleteItem findIndex', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, true))
    cart.deleteItem(1001)
    expect(cart.items.length).toBe(0);
});

test('deleteItem unfindIndex', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, true))
    cart.deleteItem(1002)
    expect(cart.items.length).toBe(1);
});

test('add single item', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, true))
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, true))
    expect(cart.items.length).toBe(1);
});

test('add not single item', () => {
    const cart = new Cart();
    cart.add(new Electronic(1024, 'IPhone', 500, false))
    cart.add(new Electronic(1024, 'IPhone', 500, false))
    expect(cart.items.length).toBe(2);
});

test('delete not single item', () => {
    const cart = new Cart();
    cart.add(new Electronic(1024, 'IPhone', 500, false))
    cart.add(new Electronic(1024, 'IPhone', 500, false))
    cart.deleteItem(1024)
    expect(cart.items.length).toBe(1);
});