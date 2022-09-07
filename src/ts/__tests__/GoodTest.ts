import Good from '../Good';

test('testing the constructor of the Good class', () => {
  const iphone = new Good(3, 'iphone', 2022, 'USA', 'link', 1000, false);
  expect(iphone).toEqual({
    id: 3,
    title: 'iphone',
    year: 2022,
    country: 'USA',
    img: 'link',
    price: 1000,
    isDigital: false
  });
})