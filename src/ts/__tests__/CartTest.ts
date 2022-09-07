import Cart from '../Cart';
import Good from '../Good';
import Movie from '../Movie';

test('positive testing the add method of the Cart class with digital item', () => {
	const cart = new Cart;
	const avengers2021 = new Movie(1, 'Мстители', 'The Avengers', true, 2012, 'USA', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 'link', 100, true);
	cart.add(avengers2021);
	expect(cart.items).toEqual([
  {
    object:{
      id: 1,
      title: 'Мстители',
      titleEng: 'The Avengers',
      isIMAX: true,
      year: 2012,
      country: 'USA',
      tagline: 'Avengers Assemble!',
      genre: ['фантастика', 'боевик', 'фэнтези', 'приключения'],
      time: 137,
      img: 'link',
      price: 100,
      isDigital: true
    },
    quantity: 1
  }
]);
})

test('positive testing the add method of the Cart class with non-digital item', () => {
	const cart = new Cart;
	const iphone = new Good(3, 'iphone', 2022, 'USA', 'link', 1000, false);
	cart.add(iphone);
	expect(cart.items).toEqual([
   {
    object:  {
      id: 3,
      title: 'iphone',
      year: 2022,
      country: 'USA',
      img: 'link',
      price: 1000,
      isDigital: false
    },
    quantity: 1
  }
]);
})

test('negative testing the add method of the Cart class with two the same digital item', () => {
	const cart = new Cart;
	const avengers2021 = new Movie(1, 'Мстители', 'The Avengers', true, 2012, 'USA', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 'link', 100, true);
	cart.add(avengers2021);
	expect(() => {
		cart.add(avengers2021);
	}).toThrow(Error(`Цифровой товар Мстители уже был в корзине`))
})

test('positive testing the add method of the Cart class with two the same non-digital item', () => {
	const cart = new Cart;
	const iphone = new Good(3, 'iphone', 2022, 'USA', 'link', 1000, false);
	cart.add(iphone);
	cart.add(iphone);
	expect(cart.items).toEqual([
   {
    object:  {
      id: 3,
      title: 'iphone',
      year: 2022,
      country: 'USA',
      img: 'link',
      price: 1000,
      isDigital: false
    },
    quantity: 2
  }
]);
})

test('positive testing the totalAmount method of the Cart class', () => {
  const cart = new Cart;
  const iphone = new Good(3, 'iphone', 2022, 'USA', 'link', 1000, false);
  cart.add(iphone);
  cart.add(iphone);
  expect(cart.totalAmount()).toBe(2000);
})

test('positive testing the totalAmountWitDiscount method of the Cart class', () => {
  const cart = new Cart;
  const iphone = new Good(3, 'iphone', 2022, 'USA', 'link', 1000, false);
  cart.add(iphone);
  expect(cart.totalAmountWitDiscount(50)).toBe(500);
})

test('positive testing the delete method of the Cart class', () => {
  const cart = new Cart;
  const iphone = new Good(3, 'iphone', 2022, 'USA', 'link', 1000, false);
  cart.add(iphone);
  cart.delete(3);
  expect(cart.items).toEqual([]);
})

test('positive testing the delete method of the Cart classwith two the same item', () => {
  const cart = new Cart;
  const iphone = new Good(3, 'iphone', 2022, 'USA', 'link', 1000, false);
  cart.add(iphone);
  cart.add(iphone);
  cart.delete(3);
  expect(cart.items).toEqual([
   {
    object:  {
      id: 3,
      title: 'iphone',
      year: 2022,
      country: 'USA',
      img: 'link',
      price: 1000,
      isDigital: false
    },
    quantity: 1
  }
]);
})

test('negative testing the delete method of the Cart class', () => {
  const cart = new Cart;
  const iphone = new Good(3, 'iphone', 2022, 'USA', 'link', 1000, false);
  cart.add(iphone);
  expect(() => {
    cart.delete(1);
  }).toThrow(Error(`Товара с id 1 нет в корзине`))
})