import React from 'react'
import Navbar from './Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button, Form, ListGroup } from "react-bootstrap";
import { FaHistory } from "react-icons/fa";
import FlowyCursor from './FlowyCursor';

const Home = () => {
    return (
        <div className="bg-black min-vh-100">
            <FlowyCursor/>
            <Navbar/>

            {/* Main Content */}
            <Container className="mt-4" style={{ backgroundColor: "black", height: "100vh" }}>
                <Card className="shadow-sm p-4 border-0" style={{backgroundColor:"black"}}>
                    <div className="text-center">
                        {/* <img src="beauty1.jpg" height={150} /> */}
                        <h1
    className="fw-bold" 
    style={{ 
        fontFamily: "serif", 
        color:"white"
    }}
>
    Malayalam Emotion Analysis
</h1>

                        <p className="text-muted" 
                        style={{ 
                            fontFamily: "serif", 
                            backgroundImage: "linear-gradient(45deg, #00008B, #4B0082, #8A2BE2, #FF00FF, #00FFFF)", 
                            WebkitBackgroundClip: "text", 
                            WebkitTextFillColor: "transparent"
                        }}
                        >
                            Analyze emotions in Malayalam social media comments to gain valuable insights for cosmetic product improvement.
                        </p>
                    </div>

                    {/* Emotion Categories */}
                    <div className="d-flex justify-content-center gap-3 mb-3">
                        <span className="text-success fw-bold" style={{ fontFamily: "serif" }}>● Happiness</span>
                        <span className="text-primary fw-bold" style={{ fontFamily: "serif" }}>● Sadness</span>
                        <span className="text-danger fw-bold" style={{ fontFamily: "serif" }}>● Anger</span>
                        <span className="text-warning fw-bold" style={{ fontFamily: "serif" }}>● Surprise</span>
                    </div>
                </Card>

                {/* Comment Input */}
                <Card className="shadow-sm mt-4 border-0">
                    <Card.Body>
                        <h4 className="fw-bold" style={{ 
                            fontFamily: "serif", 
                            backgroundImage: "linear-gradient(45deg, #00008B, #4B0082, #8A2BE2, #FF00FF, #00FFFF)", 
                            WebkitBackgroundClip: "text", 
                            WebkitTextFillColor: "transparent"
                        }}>Malayalam Comment</h4>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control as="textarea" rows={3} placeholder="Enter your comment..." />
                                <div className="text-end text-primary mt-1">Use Sample</div>
                            </Form.Group>
                            <Button
                                className="w-100 border-0 text-black fw-bold"
                                style={{
                                    background: "linear-gradient(45deg, #00008B, #4B0082, #8A2BE2, #FF00FF, #00FFFF)",
                                    borderRadius: "5px",
                                    height:"50px",
                                    fontFamily:"serif",
                                    fontSize:"20px"
                                    
                                }}
                            >
                                Analyze Sentiment →
                            </Button>

                        </Form>
                    </Card.Body>
                </Card>
            </Container>

            {/* Analysis History */}
            {/* <Container className="mt-4">
                <Card className="shadow-sm border-0">
                    <Card.Body>
                        <h6 className="fw-bold"><FaHistory /> Analysis History</h6>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                <span className="text-success">●</span> ഈ ഉല്പന്നം വളരെ മികച്ചതാണ്
                                <small className="text-muted">Mar 6, 9:32 PM</small>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                <span className="text-primary">●</span> ഞാൻ ഈ ഉല്പന്നം ഉപയോഗിച്ചു
                                <small className="text-muted">Mar 5, 9:32 PM</small>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                <span className="text-success">●</span> ഈ ക്രിം വളരെ വിലകൂടിയതാണ്
                                <small className="text-muted">Mar 4, 9:32 PM</small>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Container> */}
        </div>
    )
}

export default Home