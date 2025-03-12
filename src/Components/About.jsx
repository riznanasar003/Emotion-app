import React from "react";
import Navbar from "./Navbar";
import FlowyCursor from "./FlowyCursor";

const About = () => {
  return (
    <div>
    <Navbar/>
    <FlowyCursor/>
    <div className="about-container">
       
      <h1 className="about-title" style={{backgroundImage: "linear-gradient(45deg, #00008B, #4B0082, #8A2BE2, #FF00FF, #00FFFF)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent"}}>About Our Project</h1>
      <p className="about-subtitle">
        Discover how our Malayalam emotion analysis system helps cosmetic companies
        improve their products through social media insights.
      </p>
        
      <div className="about-card">
        <h2 className="about-heading">Our Mission</h2>
        <p>
          We are dedicated to bridging the gap between customer feedback and product 
          development in the cosmetic industry. By leveraging advanced machine learning 
          techniques, we analyze emotional responses in Malayalam social media comments 
          to provide actionable insights.
        </p>
        <p>
          Our goal is to help companies understand how their products make people feel, 
          enabling them to create better, more effective cosmetic solutions.
        </p>
      </div>

      <div className="about-card">
        <h2 className="about-heading">Our Technology</h2>
        <p>
          Our platform uses state-of-the-art NLP and machine learning algorithms trained 
          to detect emotions in Malayalam text. The system identifies key emotions:
        </p>
        <ul className="emotions-list" style={{color:"black",fontWeight:"bold"}}>
          <li>😊 Happiness</li>
          <li>😢 Sadness</li>
          <li>😡 Anger</li>
          <li>😱 Surprise</li>
          <li>😐 Neutral</li>
          <li>😨 Fear</li>
        </ul>
        <p>
          We provide visualizations and actionable suggestions to help companies make 
          data-driven decisions.
        </p>
      </div>

      

      <div className="about-card">
        <h2 className="about-heading">Our Partners</h2>
        <p>
          We collaborate with leading cosmetic brands and research institutions to 
          continuously improve our emotion detection capabilities. Through these 
          partnerships, we help brands increase customer satisfaction rates.
        </p>
      </div>
    </div>
    </div>
  );
};

export default About;
