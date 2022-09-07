import Good from '../Good';
import cartItem from '../cartItem';

test('testing the constructor of the cartItem class', () => {
  const iphone = new Good(3, 'iphone', 2022, 'USA', 'link', 1000, false);
  const iphoneInCart = new cartItem(iphone, 1);
  expect(iphoneInCart).toEqual({
    object: {
      id: 3,
      title: 'iphone',
      year: 2022,
      country: 'USA',
      img: 'link',
      price: 1000,
      isDigital: false
    },
    quantity: 1
  });
})
