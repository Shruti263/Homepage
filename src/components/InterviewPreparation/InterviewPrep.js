import {Navbar,Nav,Container} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './Navbar.css';
import AboutUs from './AboutUs';
import Practice from './Practice';
import Aptitude from './Aptitude';
import Contact from './Contact';
import DSA from './DSA';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarTop() {
  return (
    <>
    <div className= 'header'>
      <Navbar  scrolling expand='lg'>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#AboutUsMain" className='navitems'>Home</Nav.Link>
              <Nav.Link href="#aboutUsMain" className='navitems'>About</Nav.Link>
              <Nav.Link href="#practiceMain" className='navitems'>Practice</Nav.Link>
              <Nav.Link href="#aptitudeMain" className='navitems'>Aptitude</Nav.Link>
              <Nav.Link href="#dsaMain" className='navitems'>DSA</Nav.Link>
              <Nav.Link href="#contactMain" className='navitems'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    <div id='AboutUsMain'>
      <Carousel className="z-depth-1 carousel">
        <Carousel.Item>
          <img
            className="carousel_image "
            src="https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159__340.jpg"
            alt="First slide"
            height='10vh'
          />
          <Carousel.Caption className='carousel_caption'>
            <h2>We Enrich your Career!</h2>
            <h1>क्रियासिद्धिः सत्वे</h1>
            <h3>Top recruiters are Rakuten of Japan, Google, Amazon, Microsoft, Siemens, Rackware, VmWare, Dell, TCS, Media.Net, Cognizant, Druva, Sahaj Software and Veritas LLC</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel_image "
            src="https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159__340.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className='carousel_caption'>
            <h2>WE ENHANCE YOUR SKILLS!</h2>
            <h1>Bright Future</h1>
            <h3>Placements are a very attractive thing for students to take admission in Walchand College Of Engineering Sangli. Every year more than 50 companies visit our campus to recruit students across all branches.</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      <div id='aboutUsMain'><AboutUs/></div>
      <div id='practiceMain'><Practice/></div>
      <div id='aptitudeMain'><Aptitude/></div>
      <div id='dsaMain'><DSA/></div>
      <div id='contactMain'><Contact/></div>
    </>
  )
}

export default NavbarTop;