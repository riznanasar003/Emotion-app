import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-black">
                <div className="container-fluid">
                    {/* Logo on the left */}
                    <div>
                        <img src="beauty1.jpg" alt="Logo" width="130" height="150" />
                    </div>

                    {/* Navbar toggler for mobile view */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navigation links on the right */}
                    <div className="collapse navbar-collapse justify-content-start" id="navbarNav">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/home"
                                    style={{
                                        fontSize: 24,
                                        fontFamily: "serif",
                                        backgroundImage: "linear-gradient(45deg, #00008B, #4B0082, #8A2BE2, #FF00FF, #00FFFF)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent"
                                    }}
                                >
                                    <b>&nbsp;&nbsp;&nbsp;&nbsp;HOME</b>
                                </Link>

                            </li>
                            <li className="nav-item">
                            <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/home"
                                    style={{
                                        fontSize: 24,
                                        fontFamily: "serif",
                                        backgroundImage: "linear-gradient(45deg, #00008B, #4B0082, #8A2BE2, #FF00FF, #00FFFF)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent"
                                    }}
                                >
                                    <b>&nbsp;&nbsp;&nbsp;&nbsp;HISTORY</b>
                                </Link>
                            </li>
                            <li className="nav-item">
                            <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/about"
                                    style={{
                                        fontSize: 24,
                                        fontFamily: "serif",
                                        backgroundImage: "linear-gradient(45deg, #00008B, #4B0082, #8A2BE2, #FF00FF, #00FFFF)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent"
                                    }}
                                >
                                    <b>&nbsp;&nbsp;&nbsp;&nbsp;ABOUT</b>
                                </Link>
                                
                            </li>
                            <li className="nav-item">
                            <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/">
                                    <div className="d-flex justify-content-end mt-6">
                            <button type="button" className="btn insight-gold-btn btn-lg w-100" >
                                LOGOUT
                            </button>
                        </div>
                                </Link>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>


    )
}

export default Navbar