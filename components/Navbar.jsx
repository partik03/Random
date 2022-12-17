import {Navbar,Nav,Container} from 'react-bootstrap'
const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/productdescription">Product Descripton</Nav.Link>
            <Nav.Link href="/tweets">Tweets</Nav.Link>
            <Nav.Link href="/coldemails">Cold Emails</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Navigation