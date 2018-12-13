import React, { Component } from "react"
import { Card, CardTitle, CardText,
    CardSubtitle, CardBody, Row, Col, Button } from 'reactstrap';

class ListOfBooks extends Component {
    render = () => {
        let booksList = this.props.booksList
        console.log(booksList)
        let mappedBooksList = booksList.map(book => 
                <Col sm="4" style={{marginBottom:15, marginTop:15}}>
                    <Card key={book.id} body inverse style={{ backgroundColor: '#333', borderColor: '#333', minHeight:"22em"}} className="text-center"> 
                        <CardBody>
                            <CardTitle>
                                {book.title} 
                            </CardTitle>   
                            <CardSubtitle style={{marginBottom: 15}}>
                                Price: ${book.price}
                            </CardSubtitle>
                            <CardSubtitle style={{marginBottom: 15}}>
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
            <>
                    <Row style={{margin: 5}}>
                            {mappedBooksList}
                    </Row>
            </>
        )
    }
}

export default ListOfBooks