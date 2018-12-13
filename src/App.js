import React, { Component } from 'react';
import Header from "./components/Header"
import ListOfBooks from "./components/ListOfBooks"
import Checkout from "./components/Checkout"
import Footer from "./components/Footer"
import './App.css';

class App extends Component {
  state = {
    books: []
  }
  async componentDidMount(){
    const bookList = await fetch('http://localhost:8082/api/books')
    const json = await bookList.json()
    this.setState({
      books: json
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
          <ListOfBooks booksList={this.state.books} />
          <Checkout />
        <Footer />
      </div>
    );
  }
}

export default App;
