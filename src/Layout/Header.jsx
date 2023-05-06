import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux"

function Header() {
  const selectorItems=useSelector(state=>state.cart)

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Products</Nav.Link>
          </Nav>
          <Button variant="outline-success">
          <Nav.Link  as={Link} to="/cart">My Bag {selectorItems.length}</Nav.Link>
          </Button>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;