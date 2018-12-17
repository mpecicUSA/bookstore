import React, { Component } from 'react';
import Header from "./components/Header"
import ListOfBooks from "./components/ListOfBooks"
import Checkout from "./components/Checkout"
import Footer from "./components/Footer"
import { Col, Row } from "reactstrap"
import axios from "axios"
import './App.css';

// NEED HELP WITH UPDATING STATE OF SPECIFIC OBJECT OF SPECIFIC ITEM -- UPDATING INCART BOOL FROM FALSE TO TRUE W/OUT POST REQUESTS 
// NEED HELP WITH UNDERESTANDING RENDERING OF LIST OF BOOKS THEN SEARCHING THAT LIST FOR A SPECIFIC AUTHOR AND OR TITLE 
class App extends Component {
  state = {
    books: [],
    searchBarText: ""
  }
  async componentDidMount(){
    const bookList = await fetch('http://localhost:8082/api/books')
    const json = await bookList.json()
    this.setState(prevState => {
      return{
        books:
          json,
          ...prevState.books
      }
    })
  }
  updateSearchBar = (foo) => {
    this.setState({
      searchBarText: foo
    })
  }
  updateInCart = (someParam) => {
    axios.patch(`http://localhost:8082/api/books/cart/add/${someParam}`)
      .then(res => {
        let theOtherBooks =  this.state.books.filter(book => book.id != someParam)
        let orderOfBooks = [...theOtherBooks, res.data].sort((a,b) => a.id > b.id)
        this.setState({
          books: orderOfBooks
        })
      })
    }
  removeFromCart = (someParam) => {
      axios.patch(`http://localhost:8082/api/books/cart/remove/${someParam}`)
        .then(res => {
          let theOtherBooks =  this.state.books.filter(book => book.id != someParam)
          let orderOfBooks = [...theOtherBooks, res.data].sort((a,b) => a.id > b.id)
          this.setState({
            books: orderOfBooks
          })
        })
      }
render() {
      return (
        <div className="App">
            <Header searchText={this.state.searchBarText} updateSearchBar={this.updateSearchBar}/>
              <Row>
              <Col xs="10">
                <ListOfBooks searchBarText={this.state.searchBarText} booksList={this.state.books} updatesInCart={this.updateInCart} />
              </Col>
              <Col xs="2">
                <Checkout booksList={this.state.books} itemsInCart={this.state.books.filter(item => item.inCart)} removeFromCart={this.removeFromCart} />
              </Col>
            </Row>
          <Footer />
        </div>
      );
    }
  }

export default App;
