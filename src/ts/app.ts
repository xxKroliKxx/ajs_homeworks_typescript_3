import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Electronic from './domain/Electronic'

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, true));
cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, true));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, true));
cart.add(new Movie(
    1009,
    'Мстители',
    350,
    2012,
    'США',
    'Avengers Assemble!',
    ['фантастика', 'боевик', 'фэнтази', 'приключения'],
    137,
    false));
cart.add(new Electronic(1024, 'IPhone', 500, false));
cart.add(new Electronic(1024, 'IPhone', 500, false));

console.log(cart.items);
console.log(cart.amountWithDiscount(10))
console.log(cart.amountWithoutDiscount())
console.log(cart.deleteItem(1001))
console.log(cart.items);