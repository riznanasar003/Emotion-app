import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FlowyCursor from "./FlowyCursor";

const Login = () => {
    const [data, setData] = useState({
        emailid: "",
        pass: "",
    });

    const navigate = useNavigate();

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = async () => {
        try {
            const response = await axios.post("http://localhost:8080/login", data);
            console.log(response.data);
            if (response.data.status === "success") {
                sessionStorage.setItem("token", response.data.token);
                sessionStorage.setItem("userId", response.data.userId);
                sessionStorage.setItem("username", response.data.username); // Store username
                sessionStorage.setItem("emailid", response.data.emailid); // Store emailid
                navigate("/home");
            } else {
                alert(response.data.status);
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("An error occurred during login.");
        }
    };
    
    

    return (
        <div className="insight-container" style={{ backgroundColor: "black", height: "100vh" }}>
          
            <div className="row g-6">
                <div className="col-md-6 d-flex align-items-center justify-content-center text-white p-5">
                    <div style={{ width: "100%", maxWidth: "550px" }}>
                        <h1 className="insight-gold-text text-center">HELLO</h1>
                        <h4 className="text-center" style={{ color: "white" }}>
                           Signin into your account
                        </h4>

                        <div className="row g-3 mt-4">

                            <div className="col-md-12">
                                <div className="form-floating">
                                    <input type="email" className="form-control w-100" name="emailid" value={data.emailid} onChange={inputHandler} placeholder="Enter your email" />
                                    <label>Email address</label>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-floating">
                                    <input type="password" className="form-control w-100" name="pass" value={data.pass} onChange={inputHandler} placeholder="Enter your password" />
                                    <label>Password</label>
                                </div>
                            </div>

                            
                        </div>

                        <div className="d-flex justify-content-center mt-4">
                            <button type="button" className="btn insight-gold-btn btn-lg w-50" onClick={readValue}>
                                SIGN IN
                            </button>
                        </div>

                        <p className="mt-3 text-center">
                            Don't have an account? <a href="/signup">Sign up</a>
                        </p>
                    </div>
                </div>

                <div className="col-md-5 d-none d-md-block">
                    <img src="/beauty1.jpg" className="img-fluid w-100 h-80" style={{ objectFit: "cover" }} alt="Beauty" />
                </div>
            </div>
        </div>
    );
};

export default Login;
