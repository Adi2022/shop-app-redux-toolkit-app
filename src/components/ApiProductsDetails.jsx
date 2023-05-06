import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch} from "react-redux";
import { add } from "../store/cartSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";

import  {useNavigate} from 'react-router-dom'
const ApiProductsDetails = ({ shopItems }) => {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const addItemsToCart = (items) => {
    dispatch(add(items));
    console.log(items);
  };
  const handleSingleCard = (card) => {
    navigate(`/products/singleProduct/${card}`)
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Container>
        <Row xs={1} sm={3} md={3} lg={3} xl={3}>
          {shopItems.map((card) => (
            <Col key={card.id}>
              <Card
                style={{ width: "18rem" }}
              
              >
                <Card.Body>
                  <LazyLoadImage
                   thumbnail
                    variant="top"
                    src={card.thumbnail}
                    style={{ height: "100px", width: "200px" }}
                    className="card-img-top"
                    onClick={() => handleSingleCard(card.id)}
                  />
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>Rs.{card.price}</Card.Text>
                </Card.Body>
                <Button variant="success" onClick={() => addItemsToCart(card)}>
                  Add to cart
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ApiProductsDetails;
