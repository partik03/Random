import { Container } from "react-bootstrap"
import Display from "./Display"
const Homepage = () => {
  return (
    <div>
        
        <Container>
            <Display 
            header="Product Description"
            title="Product Description"
            text="This is a product description"
            link="/productdescription"
            />
            <Display
            header="Tweets"
            title="Tweets"
            text="This is a tweet"
            link="/tweets"
            />
            <Display
            header="Cold Emails"
            title="Cold Emails"
            text="This is a cold email"
            link="/coldemails"
            />
            
        </Container>
    </div>
  )
}

export default Homepage