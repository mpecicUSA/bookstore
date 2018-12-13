import React, { Component } from "react"
import { Card, CardTitle, CardText,
    CardSubtitle, CardBody, Row, Col, Button } from 'reactstrap';

class ListOfBooks extends Component {
    render = () => {
        let booksList = this.props.booksList
        console.log(booksList)
        let mappedBooksList = booksList.map(book => 
            <Col sm="4">
                <Card key={book.id} body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}> 
                    <CardBody>
                        <CardTitle>
                            {book.title} 
                        </CardTitle>   
                        <CardSubtitle>
                            Price: ${book.price}
                        </CardSubtitle>
                        <CardSubtitle>
                            Author: {book.author}
                        </CardSubtitle>
                        <CardText>
                            {book.description}
                        </CardText>
                    </CardBody>
                    <Button> Buy Me</Button>
                </Card>
            </Col>
        )
        return (
            <Row>
                    {mappedBooksList}
            </Row>
        )
    }
}

export default ListOfBooks