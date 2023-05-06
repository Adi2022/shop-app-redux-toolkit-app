import React from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {useDispatch,useSelector} from "react-redux"
import { remove} from "../store/cartSlice";
const Cart = () => {
  const selectorItems=useSelector(state=>state.cart)
  const dispatch=useDispatch();
  const removeItemsToCart=(items)=>{
    window.confirm("Item will be removed from cart")
   dispatch(remove(items))
  setTimeout((items) => {
    window.confirm("Item removed from cart",items)
  }, 400);
  }

 
  return (
    <div>
       <div className="d-flex justify-content-center align-items-center">
      <Container >
        <Row xs={1} sm={3} md={3} lg={3} xl={3}>
          {selectorItems.map((card, id) => (
            <Col key={card.id}>
              <Card style={{ width: "18rem" }}  >
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={card.thumbnail}
                    style={{ height: "100px", width: "200px" }}
                    className="card-img-top"
                    
                  />
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>Rs.{card.price}</Card.Text>
                </Card.Body>
                <Button
                  variant="danger"
                   onClick={() => removeItemsToCart(card.id)}
                >
                  Remove
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
    </div>
  )
}

export default Cart