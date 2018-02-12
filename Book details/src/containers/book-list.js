import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
//used to make sure action flows through the reducers
import { bindActionCreators } from 'redux';


class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li
        key={book.title}
        onClick={() => this.props.selectBook(book)}
        className="list-group-item">
        {book.title}
        </li>
      );
    });
  }


  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //whatever is returned from here will show up as props inside of BookList
  //whenever application state changes, booklist will automatically rerender
  return{
    books: state.books
  };
}
//Anything returned from function will end up as props on BookList container
function mapDispatchToProps(dispatch){
    //Whenever selectBook is called, the result is "dispatched", passed to all reducers
    return bindActionCreators({ selectBook: selectBook}, dispatch)
}

//whenever application state changes, object in state function will be assigned
//to state function this.props.books
//Promote booklist from a component to a container - it needs to know about new
//dispatch methor, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
