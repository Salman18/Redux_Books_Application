export function selectBook(book) {
 //selectBook is an ActionCreator, in needs to return an action,
 //an object with a type property.
 return {
     type: 'BOOK_SELECTED',
     payload: book
 };
}