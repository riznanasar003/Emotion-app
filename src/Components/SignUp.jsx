import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FlowyCursor from './FlowyCursor'

const SignUp = () => {
    const [data, setData] = useState({
        "username": "",
        "emailid": "",
        "pass": "",
        "conpass": ""
    })

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        if (data.pass === data.conpass) {
            alert("Successfully registered")

            axios.post("http://localhost:8080/signup", data).then(
                (response) => {
                    if (response.data.status === "success") {
                        sessionStorage.setItem("token", response.data.token)
                        sessionStorage.setItem("userid", response.data.userid)
                        navigate("/home")
                    } else {
                        alert("Error")
                    }
                }
            ).catch().finally()
        } else {
            alert("Password and confirm password are not the same")
        }
    }

    let navigate = useNavigate()

    return (
        <div className="insight-container" style={{ backgroundColor: "black", height: "100vh" }}>
            
            <div className="row g-6">
                <div className="col-md-6 d-flex align-items-center justify-content-center text-white p-5">
                    <div style={{ width: "100%", maxWidth: "550px" }}>
                        <h1 className="insight-gold-text text-center">Create an account!</h1>
                        <h6 className="text-center" style={{ color: "white" }}>
                            Unlock Beauty Insights – Sign Up Now for Personalized Cosmetic Trends & Reviews!
                        </h6>

                        <div className="row g-3 mt-4">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control w-100" name="username" value={data.username} onChange={inputHandler} placeholder="Enter your username" />
                                    <label>Username</label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control w-100" name="emailid" value={data.emailid} onChange={inputHandler} placeholder="Enter your email" />
                                    <label>Email address</label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="password" className="form-control w-100" name="pass" value={data.pass} onChange={inputHandler} placeholder="Enter your password" />
                                    <label>Password</label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="password" className="form-control w-100" name="conpass" value={data.conpass} onChange={inputHandler} placeholder="Confirm your password" />
                                    <label>Confirm Password</label>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center mt-4">
                            <button type="button" className="btn insight-gold-btn btn-lg w-50" onClick={readValue}>
                                SIGN UP
                            </button>
                        </div>

                        <p className="mt-3 text-center">
                            Already have an account? <a href="/">Sign in</a>
                        </p>
                    </div>
                </div>

                <div className="col-md-5 d-none d-md-block">
                    <img src="/beauty1.jpg" className="img-fluid w-100 h-80" style={{ objectFit: "cover" }} alt="Beauty" />
                </div>
            </div>
        </div>
    )
}

export default SignUp