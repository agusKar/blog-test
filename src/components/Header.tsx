import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
<Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="">
          <Nav className="ms-auto my-2 my-lg-0">
            <Link className="nav-link" to="/users">Users</Link>
            <Link className="nav-link" to="/posts">Posts</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header