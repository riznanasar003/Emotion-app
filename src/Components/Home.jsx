import React, { useState } from 'react';
import Navbar from './Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button, Form } from "react-bootstrap";
import { FaHistory, FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

import happyImg from "../assets/happy.png";
import sadImg from "../assets/sad.png";
import neutralImg from "../assets/neutral.png";

const Home = () => {
    const [comment, setComment] = useState("");
    const [result, setResult] = useState(null); // Store API result
    const [error, setError] = useState(null);   // Store error message
    const [selectedBrand, setSelectedBrand] = useState(""); 

    const handleAnalyzeSentiment = async () => {
        if (!comment.trim()) {
            alert("Please enter a comment!");
            return;
        }
        if (!selectedBrand) {
            alert("Please select a brand!");
            return;
        }

        try {
            const response = await fetch("http://127.0.0.1:5000/predict", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ Comment: comment }),
            });

            const data = await response.json();
            console.log("Backend Response:", data);

            if (response.ok) {
                setResult(data);
                setError(null); // Clear previous errors

                // Save the analyzed comment to the history
                await fetch("http://127.0.0.1:8080/history", {  // Change port if needed
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        comment: comment,
                        brand: selectedBrand, 
                        sentiment: data.Sentiment,
                        improvement: data["Improvement needed"] || "No improvement needed",
                    }),
                });

            } else {
                setError("Failed to analyze sentiment. Please try again.");
                setResult(null);
            }

        } catch (error) {
            console.error("Error:", error);
            setError("Server error. Please try again.");
            setResult(null);
        }
    };

    // Function to render star ratings based on sentiment
    const renderStars = (sentiment) => {
        if (sentiment === "Positive") {
            return [...Array(5)].map((_, index) => <FaStar key={index} className="text-warning" size={24} />);
        } else if (sentiment === "Negative") {
            return <><FaStar className="text-warning" size={24} />{[...Array(4)].map((_, index) => <FaRegStar key={index} size={24} className="text-warning" />)}</>;
        } else if (sentiment === "Neutral") {
            return <><FaStar className="text-warning" size={24} /><FaStar className="text-warning" size={24} /><FaStarHalfAlt className="text-warning" size={24} />{[...Array(2)].map((_, index) => <FaRegStar key={index} size={24} className="text-warning" />)}</>;
        }
        return null;
    };

    const getSentimentImage = (sentiment) => {
        switch (sentiment) {
            case "Positive":
                return happyImg;
            case "Negative":
                return sadImg;
            case "Neutral":
                return neutralImg;
            default:
                return null;
        }
    };


    return (
        <div className="bg-black min-vh-100">
            <Navbar />
            <center>
                <h1 style={{
                    fontFamily: "serif",
                    backgroundImage: "linear-gradient(45deg, #00008B, #4B0082, #8A2BE2, #FF00FF, #00FFFF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "bold"
                }}><img src="beauty2.jpg" width="100" height="120" /> EMO-MOZHI <img src="beauty1.jpg" width="100" height="120" /></h1>

            </center>
            {/* Display GIF based on sentiment result */}
            {result && (
                <div className="text-center mt-3">
                    <img
                        src={getSentimentImage(result.Sentiment)}
                        alt="Sentiment Image"
                        style={{ width: "200px", height: "200px", borderRadius: "10px" }}
                    />
                </div>
            )}
            <Container className="mt-4" style={{ backgroundColor: "black", height: "100vh" }}>

                <Card className="shadow-sm p-4 border-0" style={{ backgroundColor: "black" }}>
                    <div className="text-center">
                        <h2 className="fw-bold" style={{ fontFamily: "serif", color: "white" }}>
                            AN EXPLORATION OF OPINIONS IN ONLINE COSMETIC REVIEWS
                        </h2>
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

                    <div className="d-flex justify-content-center gap-3 mb-3">
                        <span className="text-success fw-bold" style={{ fontFamily: "serif" }}>● Happiness</span>
                        <span className="text-primary fw-bold" style={{ fontFamily: "serif" }}>● Sadness</span>
                        <span className="text-danger fw-bold" style={{ fontFamily: "serif" }}>● Anger</span>
                        <span className="text-warning fw-bold" style={{ fontFamily: "serif" }}>● Surprise</span>
                    </div>

                </Card>

                <Card className="shadow-sm mt-4 border-0">
                    
                    <Card.Body>
                    <h4 className="fw-bold" style={{
                            fontFamily: "serif",
                            backgroundImage: "linear-gradient(45deg, #00008B, #4B0082, #8A2BE2, #FF00FF, #00FFFF)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                           
                        }}><center>Brand Name</center></h4>
                    <Form>
                            <Form.Group className="mb-3" style={{ display: "flex", justifyContent: "center", width: "100%", fontFamil:"serif" }}>
                                <Form.Control
                                    as="select"
                                    style={{ width: "75%", fontFamily:"serif" }}
                                    value={selectedBrand} // 🟢 Track selected brand
                                    onChange={(e) => setSelectedBrand(e.target.value)}
                                >
                                    <option value="" style={{fontFamily:"serif"}}>select a brand</option>
                                    <option value="Nykaa" style={{fontFamily:"serif"}}>Nykaa</option>
                                    <option value="Maybelline" style={{fontFamily:"serif"}}>Maybelline</option>
                                    <option value="Plum" style={{fontFamily:"serif"}}>Plum</option>
                                    <option value="Insight" style={{fontFamily:"serif"}}>Insight</option>
                                    <option value="L'Oréal" style={{fontFamily:"serif"}}>L'Oréal</option>
                                    <option value="Nivea" style={{fontFamily:"serif"}}>Nivea</option>
                                    <option value="Sunsilk" style={{fontFamily:"serif"}}>Sunsilk</option>
                                    <option value="Himalaya" style={{fontFamily:"serif"}}>Himalaya</option>
                                    <option value="Lakme" style={{fontFamily:"serif"}}>Lakme</option>
                                    
                                </Form.Control>
                            </Form.Group>
                        </Form>
                        <h4 className="fw-bold" style={{
                            fontFamily: "serif",
                            backgroundImage: "linear-gradient(45deg, #00008B, #4B0082, #8A2BE2, #FF00FF, #00FFFF)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>Malayalam Comment</h4>
                        



                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control as="textarea" rows={3} placeholder="Enter your comment..."
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />

                            </Form.Group>
                            <Button
                                className="w-100 border-0 text-black fw-bold"
                                onClick={handleAnalyzeSentiment}
                                style={{
                                    background: "linear-gradient(45deg, #00008B, #4B0082, #8A2BE2, #FF00FF, #00FFFF)",
                                    borderRadius: "5px",
                                    height: "50px",
                                    fontFamily: "serif",
                                    fontSize: "20px"
                                }}
                            >
                                Analyze Sentiment →
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>

                {/* Display Result */}
                {result && (
                    <Card className="shadow-sm mt-4 border-0" style={{ backgroundColor: "black", color: "white" }}>
                        <Card.Body>
                            <h2
                                className="fw-bold text-center"
                                style={{
                                    fontFamily: "serif",
                                    backgroundImage: "linear-gradient(45deg, #00008B, #4B0082, #8A2BE2, #FF00FF, #00FFFF)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                }}
                            >
                                Analysis Result
                            </h2>

                            <p className="text-center" style={{ fontFamily: "serif", fontSize: "18px" }}>
                                <strong>Sentiment:</strong> {result.Sentiment || "N/A"}
                            </p>
                            <p className="text-center" style={{ fontFamily: "serif", fontSize: "18px" }}>
                                <strong>Improvement Suggestion:</strong> {result["Improvement needed"] || "No improvement needed"}
                            </p>

                            {/* Display Stars */}
                            <div className="text-center mt-3">
                                {renderStars(result.Sentiment)}
                            </div>
                        </Card.Body>
                    </Card>
                )}

                {/* Display Error Message */}
                {error && <p className="text-danger mt-3">{error}</p>}
            </Container>
        </div>
    );
}

export default Home;
