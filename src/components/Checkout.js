import React, { Component } from "react"
import { Badge, ListGroup, ListGroupItem, Button} from "reactstrap"

class Checkout extends Component {
    render = () => {
        let booksList = this.props.booksList
        let itemsSelected = [
            {id:1, price: 5, title: "Learning JavaScript Design Patterns"},
            {id:2, price: 15, title: "Learning JavaScript, Cuz BS"}
        ]
        let numberOfItemsInCart = Object.keys(itemsSelected).length
        return (
            <>
                <h5 style={{marginTop: 15}}>
                Your Shopping Cart <Badge color="success">{numberOfItemsInCart}</Badge>
                </h5>
                {itemsSelected.map(item => 
                <ListGroup flush>
                    <ListGroupItem>{item.title}</ListGroupItem>
                </ListGroup> 
                )}
                <p>
                Total cost of items in cart: {itemsSelected.reduce((a,b) => a+b.price, 0)}
                </p>
                <Button color="success">Checkout</Button>
            </>
        )
    }
}

export default Checkout