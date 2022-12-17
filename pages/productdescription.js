import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navbar'
import {Configuration,OpenAIApi} from "openai";
import {Form,Card,Nav,Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
const productdescription = () => {
    const [heading, setHeading] = useState("The AI product description for your product")
    const [response, setResponse] = useState("The AI product description for your product")
    useEffect(() => {
     setResponse("The AI product description for your product")
    }, [])
    
    
    const handleSubmit =async (e)=>{
        e.preventDefault();
        const fromData = new FormData(e.target);
        const data = Object.fromEntries(fromData.entries());
        console.log(data);
        console.log(process.env.OPENAI_API_KEY);
        setHeading(`The description for the product ${data.productname} is:`)
        const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);
        console.log(`Write a detailed,informative and engaging product description for ${data.productname}`);
        const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Write a detailed,informative and engaging product description for ${data.productname}`,
        temperature: 0.92,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        })
        console.log(response);
        setResponse(response.data.choices[0].text)
    
    }
  return (
    <>
    <Navigation/>
    <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail" className='mb-3'>
            <Form.Label><h1>What product you would like to get description for?</h1></Form.Label>
            <Form.Control
                type="text"
                placeholder="Enter product name"
                name="productname" />
            <Form.Text className='text-muted'>
                Enter as much information as possible
            </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" size='lg'>
                Get AI Suggestions
            </Button>
    </Form>
    <br />
    <br />
    <Card>
      <Card.Body>
        <Card.Title><h1>{heading}</h1></Card.Title>
        {/* <Card.Text> */}
          <div>{response}</div>
        {/* </Card.Text> */}
      </Card.Body>
    </Card>
    </>
  )
}

export default productdescription