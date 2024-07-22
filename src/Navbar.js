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
import { FaShoppingCart} from "react-icons/fa";
import './Navbar.css'

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="#">
          <img 
            src='https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/yoda/furlenco-logo.png' 
            width="190px" 
            alt='logo' 
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 nav-links"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="nav-item"><FaMapLocationDot /> Delivery to 560068</Nav.Link>
            <Nav.Link href="#action2" className="nav-item"><IoIosCheckmarkCircle /> Link</Nav.Link>
            <NavDropdown title="Buy" id="navbarScrollingDropdown" className="nav-dropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Rent" id="navbarScrollingDropdown" className="nav-dropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled className="nav-item">
              <img 
                src='https://www.adgully.com/img/800/202107/ulmtd.png.jpg' 
                width="50px" 
                alt='second-img' 
              />
            </Nav.Link>
          </Nav>
          <Form className="d-flex search-form">
            <Form.Control
              type="search"
              placeholder="What are you searching for"
              className="me-2 search-input"
              aria-label="Search"
            />
            <Button variant="outline-success" className="search-button">Search</Button>
          </Form>
          <Nav className="ms-3">
            <Nav.Link href="#action2" className="nav-icon"><FaUser /></Nav.Link>
            <Nav.Link href="#action2" className="nav-icon"><FaHeart /></Nav.Link>
            <Nav.Link href="#action2" className="nav-icon"><FaShoppingCart /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
