import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);
  const [shopItems, setShopItems] = useState([]);

  const getProductsFromApi = () => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setShopItems(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getProductsFromApi();
  }, [id]);
  return (
   
      <Container >
        <Row xs={1} sm={3} md={3} lg={3} xl={3}>
          <Col md={6}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Img
                  variant="top"
                  src={shopItems.thumbnail}
                  style={{ height: "100px", width: "200px" }}
                  className="card-img-top"
                />
                <Card.Title>{shopItems.brand}</Card.Title>
                <Card.Title>{shopItems.category}</Card.Title>
                <Card.Title>{shopItems.title}</Card.Title>
                
              
                <div className="d-flex justify-content-between">
                  <Card.Text>Rs.{shopItems.price}</Card.Text>
                  <Card.Text>{shopItems.discountPercentage}%</Card.Text>
                </div>
              </Card.Body>
              {/* <Button variant="success" onClick={() => addItemsToCart(shopItems)}>
                Add to cart
              </Button> */}
            </Card>
          </Col>
          <Col md={6}>
          <Card.Text>{shopItems.description}</Card.Text>
          <Carousel className="carousel-container">
                  {shopItems.images?.map((image, index) => (
                    <div key={index}>
                      <Card.Img src={image} alt={`Product ${index}`} />
                    </div>
                  ))}
                </Carousel>
          </Col>
        </Row>
      </Container>
   
  );
};

export default SingleProduct;
