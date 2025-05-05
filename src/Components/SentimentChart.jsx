import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card } from "react-bootstrap";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const SentimentChart = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/history")  // Adjust backend URL if needed
            .then(response => {
                processChartData(response.data);
            })
            .catch(error => {
                console.error("Error fetching history:", error);
            });
    }, []);

    const processChartData = (data) => {
        const sentimentCount = {};

        data.forEach(item => {
            if (!sentimentCount[item.brand]) {
                sentimentCount[item.brand] = { brand: item.brand, Positive: 0, Negative: 0, Neutral: 0 };
            }
            sentimentCount[item.brand][item.sentiment]++;
        });

        setChartData(Object.values(sentimentCount));
    };

    return (
        <div className="bg-black min-vh-100">
            <Navbar />
            <Container className="mt-4">
                <Card className="shadow-sm p-4 border-0" style={{ backgroundColor: "black", color: "white", fontFamily: "serif", fontSize: "20px" }}>
                    <h1 className="fw-bold text-center" style={{ color: "white" }}>Brand-wise Sentiment Analysis</h1>
                    
                    <div className="chart-container mt-4">
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
                                <XAxis dataKey="brand" stroke="white" />
                                <YAxis stroke="white" />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="Positive" fill="#00008B" />
                                <Bar dataKey="Neutral" fill="#8A2BE2" />
                                <Bar dataKey="Negative" fill="#FF00FF" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
            </Container>
        </div>
    );
};

export default SentimentChart;
