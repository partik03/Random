import {Card,Button,Nav} from 'react-bootstrap'
const Display = ({header,title,text,link}) => {
  return (
    <div>
        <Card>
      <Card.Header>{header}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {text}
        </Card.Text>
        <Nav.Link href={link}>
        <Button variant="primary">Go somewhere</Button>
        </Nav.Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Display