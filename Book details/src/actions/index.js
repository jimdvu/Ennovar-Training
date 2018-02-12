

export function selectBook(book) {
  //selectBook is an action creator, needs to return an actions
  //obect with a type property, sometimes contains a payload
  //type always all caps 
  return{
    type: 'BOOK_SELECTED',
    payload: book
  };
}
