import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Table, Card } from "react-bootstrap";
import { FaHistory, FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const History = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/history")  // Adjust backend URL if needed
            .then(response => {
                setHistory(response.data);
            })
            .catch(error => {
                console.error("Error fetching history:", error);
            });
    }, []);

    const renderStars = (sentiment) => {
        if (sentiment === "Positive") {
            return [...Array(5)].map((_, index) => <FaStar key={index} className="text-warning" size={20} />);
        } else if (sentiment === "Negative") {
            return (
                <>
                    <FaStar className="text-warning" size={20} />
                    {[...Array(4)].map((_, index) => <FaRegStar key={index} className="text-warning" size={20} />)}
                </>
            );
        } else if (sentiment === "Neutral") {
            return (
                <>
                    <FaStar className="text-warning" size={20} />
                    <FaStar className="text-warning" size={20} />
                    <FaStarHalfAlt className="text-warning" size={20} />
                    {[...Array(2)].map((_, index) => <FaRegStar key={index} className="text-warning" size={20} />)}
                </>
            );
        }
        return null;
    };

    return (
        <div className="bg-black min-vh-100">
            <Navbar />
            <Container className="mt-4">
                <Card className="shadow-sm p-4 border-0" style={{ backgroundColor: "black", color: "white", fontFamily: "serif", fontSize: "20px" }}>
                    <h1 className="fw-bold text-center">
                        <FaHistory className="me-2" /> Sentiment Analysis History
                    </h1>
                    <center>
                        <h2 style={{
                            fontFamily: "serif",
                            backgroundImage: "linear-gradient(45deg, #00008B, #4B0082, #8A2BE2, #FF00FF, #00FFFF)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontWeight: "bold"
                        }}><img src="beauty2.jpg" width="100" height="120" /> EMO-MOZHI <img src="beauty1.jpg" width="100" height="120" /></h2>

                    </center>
                    <div className="table-responsive mt-4">
                        <Table bordered hover className="text-white history-table">
                            <thead>
                                <tr>
                                    <th>Comment</th>
                                    <th>Brand</th>
                                    <th>Sentiment</th>
                                    <th>Improvement Needed</th>
                                    <th>Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                                {history.length > 0 ? (
                                    history.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.comment}</td>
                                            <td>{item.brand}</td>
                                            <td>{item.sentiment}</td>
                                            <td>{item.improvement}</td>
                                            <td>{renderStars(item.sentiment)}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center">No history available</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                </Card>
            </Container>
        </div>
    );
};

export default History;