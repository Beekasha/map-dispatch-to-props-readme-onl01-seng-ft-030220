import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';
 
class App extends Component {
 
  handleOnClick = event => {
    this.props.addItem() // Code change: this.props.store.dispatch is no longer being called
  }
 
  render() {
    return (
      <div className="App">
        <button onClick={this.handleOnClick}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};
 
const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};
 
// Code change: this new function takes in dispatch as an argument
// It then returns an object that contains a function as a value!
// Notice above in handleOnClick() that this function, addItem(),
// is what is called, NOT the addItem action creator itself.
const mapDispatchToProps = dispatch => {
  return {
    addItem: () => {
      dispatch(addItem())
    }
  };
};
 
export default connect(mapStateToProps, { addItem })(App); // Code change: no mapDispatchToProps function required!
//in one line:
// export default connect(state => ({ items: state.items }), { addItem })(App);
//
//above is the same as writing this:
// const mapStateToProps = state => {
//   return {
//     items: state.items
//   }
// }
 
// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => { dispatch(addItem()) }
//   }
// }
 
// export default connect(mapStateToProps, mapDispatchToProps)(App);
