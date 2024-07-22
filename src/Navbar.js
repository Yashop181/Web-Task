import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaMapLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart} from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaCheckCircle } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
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
            <Nav.Link href="#action1" className="nav-item"><FaMapLocationDot /> Delivery <br/> to 560068</Nav.Link>

            
            <NavDropdown title={<span><FaCheckCircle /> Buy</span>} id="navbarScrollingDropdown" className="nav-dropdown mega-menu">
              <Row>
                <Col md={3}>
                  <NavDropdown.Item href="#action3"> <img src='https://assets.furlenco.com/s3-furlenco-images/evolve_2_0/living_icon.png' width="50px" alt='all-images'  />  <br/> Living Room  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4"> <img  src='https://assets.furlenco.com/s3-furlenco-images/evolve_2_0/dining_icon.png' width="50px" alt='all-images' /> <br/> Dining </NavDropdown.Item>
                </Col>
                <Col md={3}>
                  <NavDropdown.Item href="#action5"> <img src='https://assets.furlenco.com/plutus/collections/1708662240.png' width="50px" alt='all-images' /> <br/> Bedroom </NavDropdown.Item>
                  <NavDropdown.Item href="#action6"><img src='https://assets.furlenco.com/s3-furlenco-images/evolve_2_0/table_icon.png' width="50px" alt='all-images' /> <br/> Tables </NavDropdown.Item>
                </Col>
                <Col md={3}>
                  <NavDropdown.Item href="#action7"> <img src='https://assets.furlenco.com/s3-furlenco-images/evolve_2_0/storage_icon.png' width="50px" alt='all-images'  />  <br/> Storage  </NavDropdown.Item>
                  <NavDropdown.Item href="#action8"><img src='https://assets.furlenco.com/s3-furlenco-images/evolve_2_0/chair_icon_v5.png'  width="50px" alt='all-images' />  <br/> Chairs </NavDropdown.Item>
                </Col>
                <Col md={3}>
                  <NavDropdown.Item href="#action7"><img src='https://assets.furlenco.com/s3-furlenco-images/evolve_2_0/study_icon.png'  width="50px" alt='all-images' /> <br/> Study</NavDropdown.Item>
                  <NavDropdown.Item href="#action8"> <img src='https://assets.furlenco.com/plutus/products/0/icon/GenZ%20New.png' width="50px" alt='all-images' />  <br/> Z- rated </NavDropdown.Item>
                </Col>

              </Row>
            </NavDropdown>
            <NavDropdown title={<span><FaClock /> Rent</span>} id="navbarScrollingDropdown" className="nav-dropdown mega-menu">
            <Row>
                <Col md={3}>
                  <NavDropdown.Item href="#action3"> <img src='https://assets.furlenco.com/s3-furlenco-images/evolve_2_0/living_icon.png' width="50px" alt='another-all'   />  <br/> Living Room  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4"> <img  src='https://assets.furlenco.com/s3-furlenco-images/evolve_2_0/dining_icon.png' width="50px" alt='another-all'  /> <br/> Dining </NavDropdown.Item>
                </Col>
                <Col md={3}>
                  <NavDropdown.Item href="#action5"> <img src='https://assets.furlenco.com/plutus/collections/1708662240.png' width="50px" alt='another-all'  /> <br/> Bedroom </NavDropdown.Item>
                  <NavDropdown.Item href="#action6"><img src='https://assets.furlenco.com/s3-furlenco-images/evolve_2_0/table_icon.png' width="50px" alt='another-all'  /> <br/> Tables </NavDropdown.Item>
                </Col>
                <Col md={3}>
                  <NavDropdown.Item href="#action7"> <img src='https://assets.furlenco.com/s3-furlenco-images/evolve_2_0/storage_icon.png' width="50px" alt='another-all' />  <br/> Storage  </NavDropdown.Item>
                  <NavDropdown.Item href="#action8"><img src='https://assets.furlenco.com/s3-furlenco-images/evolve_2_0/chair_icon_v5.png'  width="50px" alt='another-all'  />  <br/> Chairs </NavDropdown.Item>
                </Col>
                <Col md={3}>
                  <NavDropdown.Item href="#action7"><img src='https://assets.furlenco.com/s3-furlenco-images/evolve_2_0/study_icon.png'  width="50px" alt='another-all'  /> <br/> Study</NavDropdown.Item>
                  <NavDropdown.Item href="#action8"> <img src='https://assets.furlenco.com/plutus/products/0/icon/GenZ%20New.png' width="50px" alt='another-all'  />  <br/> Z- rated </NavDropdown.Item>
                </Col>
                <Col md={3}>
                  <NavDropdown.Item href="#action7"><img src='https://assets.furlenco.com/plutus/collections/1707746275.png'  width="50px" alt='another-all'  /> <br/> Kids Room</NavDropdown.Item>

                </Col>
                <Col md={3}>
                  <NavDropdown.Item href="#action7"><img src='https://assets.furlenco.com/plutus/collections/1709878008.png'  width="50px" alt='another-all'  /> <br/> Fitness</NavDropdown.Item>

                </Col>
                <Col md={3}>
                  <NavDropdown.Item href="#action7"><img src='https://assets.furlenco.com/plutus/collections/1709877849.png'  width="50px" alt='another-all'  /> <br/> Electronics</NavDropdown.Item>

                </Col>
                <Col md={3}>
                  <NavDropdown.Item href="#action7"><img src='https://assets.furlenco.com/plutus/products/0/icon/Mattress.png'  width="50px" alt='another-all'  /> <br/> Mattress</NavDropdown.Item>

                </Col>

              </Row>
            </NavDropdown>
            <Nav.Link href="#" disabled className="nav-item">
              <img 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGaaLSM0dkOWaJ1NseGhAMp049j9PlZQe-AA&s' 
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
