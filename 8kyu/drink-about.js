/* Problem:

    Kids drink toddy.
    Teens drink coke.
    Young adults drink beer.
    Adults drink whisky.

Make a function that receive age, and return what they drink.

Rules:

    Children under 14 old.
    Teens under 18 old.
    Young under 21 old.
    Adults have 21 or more.
*/

//My solution:
const peopleWithAgeDrink = (age) => {
  return age < 14
    ? 'drink toddy'
    : age >= 14 && age < 18
    ? 'drink coke'
    : age >= 18 && age < 21
    ? 'drink beer'
    : 'drink whisky';
};

//best practice:
