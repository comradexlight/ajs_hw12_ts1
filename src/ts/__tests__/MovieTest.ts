import Movie from '../Movie';

test('testing the constructor of the Movie class', () => {
  const avengers2021 = new Movie(1, 'Мстители', 'The Avengers', true, 2012, 'USA', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 'link', 100, true);
  expect(avengers2021).toEqual({
    id: 1,
    title: 'Мстители',
    titleEng: 'The Avengers',
    isIMAX: true,
    year: 2012,
    country: 'USA',
    tagline: 'Avengers Assemble!',
    genre: [ 'фантастика', 'боевик', 'фэнтези', 'приключения' ],
    time: 137,
    img: 'link',
    price: 100,
    isDigital: true
  });
})