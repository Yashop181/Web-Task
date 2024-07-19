import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"> <img src='https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/yoda/furlenco-logo.png' width="190px" alt='logo' /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><FaMapLocationDot />Delivery to 560068  </Nav.Link>
            <Nav.Link href="#action2"> <IoIosCheckmarkCircle />Link</Nav.Link>
            <NavDropdown title="Buy" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"> Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Rent" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"> Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              <img src='https://www.adgully.com/img/800/202107/ulmtd.png.jpg' width="50px" alt='second-img' />
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="What are you searching for"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav.Link href="#action2"><FaUser /></Nav.Link>
          <Nav.Link href="#action2"><FaHeart /></Nav.Link>
          <Nav.Link href="#action2"><FaShoppingCart /></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;