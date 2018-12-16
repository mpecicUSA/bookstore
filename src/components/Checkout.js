import React, { Component } from "react"
import { Badge, ListGroup, ListGroupItem, Button} from "reactstrap"

class Checkout extends Component {
    removeItemFromCart = (e) => {
        this.props.removeFromCart(e.target.value)
    }
    render = () => {
        let numberOfItemsInCart = 0;
        if (Object.keys(this.props.itemsInCart).length > 0) {
            numberOfItemsInCart=(Object.keys(this.props.itemsInCart).length)
        }
        return (
            <>
                <h5 style={{marginTop: 15}}>
                Your Shopping Cart <Badge color="success">{numberOfItemsInCart}</Badge>
                </h5>
                {this.props.itemsInCart.map(item => 
                <ListGroup flush>
                    <ListGroupItem key={item.id} value={item.id} onClick={this.removeItemFromCart}> {item.title} </ListGroupItem>
                </ListGroup> 
                )}
                <p>
                Total cost of items in cart: {this.props.itemsInCart.reduce((a,b) => a+b.price, 0)}
                </p>
                <Button color="success">Checkout</Button>
            </>
        )
    }
}

export default Checkout