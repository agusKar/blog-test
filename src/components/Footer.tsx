import { Container } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>      
        <Row className="justify-content-around">
          <Col><h4>Blog</h4></Col>
          <Col className="d-flex justify-content-end">
            <Link className="nav-link me-4" to="/users">Users</Link>
            <Link className="nav-link" to="/posts">Posts</Link></Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer