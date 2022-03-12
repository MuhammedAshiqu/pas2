import React , { Fragment } from 'react';
import './footer1.css'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BiFontColor } from 'react-icons/bi';


// 

const Footer1 = () => {
  return (
    <Fragment>
    
    <Container fluid style={{ height: 100, backgroundColor: "blue" }}>
        {/* <Container style={{ height:100, backgroundColor: "red" }}></Container> */}
    </Container>
    <Navbar className="bg-dark"> 
        <Nav  className="m-auto">
            <div className='two'>
                <h3>Privacy</h3>
            {/* <Nav.Link to="/privacy" className="nav-link">
                Privacy
            </Nav.Link> */}
            <h3>Terms &amp; Conditions</h3>
            {/* <Nav.Link to="/terms" className="nav-link">
                Terms &amp; Conditions */}
            {/* </Nav.Link> */}
            <h3>Policy</h3>
            {/* <Nav.Link to="/policy" className="nav-link">
                Policy
            </Nav.Link> */}
    <h5>© 2019 Goods &amp; services. All rights reserved. Created by Goods and Services LLC</h5>
            </div>
        </Nav>
    </Navbar>
    </Fragment>
  );
}

export default Footer1;