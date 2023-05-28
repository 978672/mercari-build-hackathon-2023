import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from '../../logo.png';
import { useState } from "react";

// bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import InputGroup from 'react-bootstrap/InputGroup';

export const Header: React.FC = () => {
  const [cookies, _, removeCookie] = useCookies(["userID", "token"]);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const onLogout = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    removeCookie("userID");
    removeCookie("token");
  };

  const handleSearch = () => {
    navigate(`/items/search/${searchValue}`);
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
        <Navbar>
          <Container fluid>
            <Navbar.Brand onClick={() => navigate('/')}><img className="logo" src={logo} alt="Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search minimercari"
                  className="me-2"
                  aria-label="Search"
                  // id="MerTextInput"
                  onChange={(e) => setSearchValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                />
                <Button variant="outline-secondary" onClick={handleSearch}><i className="bi bi-search"></i></Button>{' '}
              </Form>
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
              </Nav>
              <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate('/sell')}>Listing</Nav.Link>
              <Nav.Link onClick={() => navigate(`/user/${cookies.userID}`)}>Mypage</Nav.Link>
              <Button variant="danger" onClick={onLogout}>logout</Button>{' '}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}
