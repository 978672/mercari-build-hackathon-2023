import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from '../../logo.png';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

/* font awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const Header: React.FC = () => {
  const [cookies, _, removeCookie] = useCookies(["userID", "token"]);
  const navigate = useNavigate();

  const onLogout = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    removeCookie("userID");
    removeCookie("token");
  };

  return (
    <>
    <head>
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossOrigin="anonymous"
/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"></link>
    </head>
      <header>
        
        {/* <div className="headerWtapper"> */}
          {/* <i className="bi bi-house-door-fill"></i> */}
          <Navbar bg="light" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#"><img className="logo" src={logo} alt="Logo" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="何をお探しですか"
                    className="me-2"
                    aria-label="Search"
                    id="MerTextInput"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                </Nav>
                
                  {/* <Nav.Link href="#" disabled>
                    logout
                  </Nav.Link> */}
                  <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
                  <Nav.Link onClick={() => navigate('/sell')}>Listening</Nav.Link>
                  <Nav.Link onClick={() => navigate(`/user/${cookies.userID}`)}>Mypage</Nav.Link>
                  <Button variant="danger" onClick={onLogout}>logout</Button>{' '}
                  {/* <Button variant="danger" onClick={onLogout} id="MerButton">logout</Button>{' '}  */}
              </Navbar.Collapse>
            </Container>
          </Navbar>
        {/* </div> */}
      </header>
    </>
  );
}
