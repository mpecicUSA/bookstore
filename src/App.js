import React, { Component } from 'react';
import Header from "./components/Header"
import ListOfBooks from "./components/ListOfBooks"
import Checkout from "./components/Checkout"
import Footer from "./components/Footer"
import { Col, Row } from "reactstrap"
import './App.css';

class App extends Component {
  state = {
    books: []
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
  updateInCart = (someParam) => {
    console.log("this is the state", this.state.books.id)
    console.log("attempting filter", this.state.books.filter(books => books.id == someParam))
  }
  render() {
      return (
        <div className="App">
            <Header />
              <Row>
              <Col xs="10">
                <ListOfBooks booksList={this.state.books} updatesInCart={this.updateInCart} />
              </Col>
              <Col xs="2">
                <Checkout booksList={this.state.books} itemsInCart={this.state.books.filter(item => item.inCart)} />
              </Col>
            </Row>
          <Footer />
        </div>
      );
    }
  }

export default App;
