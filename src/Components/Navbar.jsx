import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaPencilAlt } from 'react-icons/fa';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [user, setUser] = useState({ username: "", email: "", profilePic: "/profile1.jpg" });
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user details from sessionStorage (username & email) and localStorage (profilePic)
        const storedUsername = sessionStorage.getItem("username");
        const storedEmail = sessionStorage.getItem("emailid");
        const storedProfilePic = localStorage.getItem("profilePic") || "/profile1.jpg"; // Default image

        setUser({
            username: storedUsername || "User",
            email: storedEmail || "No Email",
            profilePic: storedProfilePic
        });
    }, []);

    const handleLogout = () => {
        sessionStorage.clear();
        localStorage.removeItem("profilePic"); // Clear profile pic on logout
        navigate("/");
    };

    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newPic = reader.result;
                localStorage.setItem("profilePic", newPic); // Save to localStorage
                setUser(prevUser => ({ ...prevUser, profilePic: newPic }));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-black">
                <div className="container-fluid">
                    {/* Logo on the left */}
                    <div>
                        <img src="beauty1.jpg" alt="Logo" width="130" height="150" />
                    </div>

                    {/* Navigation links */}
                    <div className="collapse navbar-collapse justify-content-start" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/home" style={{
                                    fontSize: 24,
                                    fontFamily: "serif",
                                    backgroundImage: "linear-gradient(45deg, #00008B, #4B0082, #8A2BE2, #FF00FF, #00FFFF)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                }}>
                                    <b>&nbsp;&nbsp;&nbsp;&nbsp;HOME</b>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/history" style={{
                                    fontSize: 24,
                                    fontFamily: "serif",
                                    backgroundImage: "linear-gradient(45deg, #00008B, #4B0082, #8A2BE2, #FF00FF, #00FFFF)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                }}>
                                    <b>&nbsp;&nbsp;&nbsp;&nbsp;HISTORY</b>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/sentiment" style={{
                                    fontSize: 24,
                                    fontFamily: "serif",
                                    backgroundImage: "linear-gradient(45deg, #00008B, #4B0082, #8A2BE2, #FF00FF, #00FFFF)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                }}>
                                    <b>&nbsp;&nbsp;&nbsp;&nbsp;CHART</b>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about" style={{
                                    fontSize: 24,
                                    fontFamily: "serif",
                                    backgroundImage: "linear-gradient(45deg, #00008B, #4B0082, #8A2BE2, #FF00FF, #00FFFF)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                }}>
                                    <b>&nbsp;&nbsp;&nbsp;&nbsp;ABOUT</b>
                                </Link>
                            </li>
                           
                        </ul>
                    </div>

                    {/* Profile Icon & Dropdown */}
                    <div className="position-relative">
                        <img
                            src={user.profilePic}
                            alt="Profile"
                            width="55"
                            height="55"
                            className="rounded-circle cursor-pointer"
                            onClick={() => setShowDropdown(!showDropdown)}
                        />

                        {/* Profile Dropdown */}
                        {showDropdown && (
                            <div
                                className="position-absolute p-3 shadow rounded"
                                style={{
                                    top: "100%", // Positions it dynamically below the navbar
                                    right: "10px",
                                    width: "260px",
                                    background: "black",
                                    color: "white",
                                    border: "3px solid transparent",
                                    borderImage: "linear-gradient(45deg, #00008B, #4B0082, #8A2BE2, #FF00FF, #00FFFF) 1",
                                    borderRadius: "10px",
                                    fontFamily: "serif",
                                    zIndex: 1000,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <div className="text-center position-relative">
                                    {/* Profile Pic with Pencil Button */}
                                    <div className="position-relative d-inline-block">
                                        <img
                                            src={user.profilePic}
                                            alt="User"
                                            width="70"
                                            height="70"
                                            className="rounded-circle mb-2"
                                            style={{ border: "2px solid white" }}
                                        />

                                        {/* Pencil Icon at Bottom Right */}
                                        <label
                                            htmlFor="profilePicUpload"
                                            className="position-absolute"
                                            style={{
                                                bottom: "5px",
                                                right: "5px",
                                                background: "white",
                                                borderRadius: "50%",
                                                padding: "5px",
                                                cursor: "pointer",
                                                boxShadow: "0px 0px 5px rgba(0,0,0,0.3)"
                                            }}
                                        >
                                            <FaPencilAlt size={14} color="black" />
                                        </label>
                                        <input
                                            type="file"
                                            id="profilePicUpload"
                                            accept="image/*"
                                            onChange={handleProfilePicChange}
                                            style={{ display: "none" }}
                                        />
                                    </div>

                                    <h5 className="mt-2">{user.username}</h5>
                                    <p className="text-light">{user.email}</p>

                                    <button
                                        className="btn btn-danger btn-sm w-100"
                                        onClick={handleLogout}
                                        style={{
                                            background: "linear-gradient(45deg, #00008B, #4B0082, #8A2BE2, #FF00FF, #00FFFF)",
                                            border: "none",
                                            borderRadius: "5px",
                                            fontWeight: "bold",
                                            transition: "0.3s ease",
                                        }}
                                        onMouseOver={(e) => e.target.style.opacity = "0.8"}
                                        onMouseOut={(e) => e.target.style.opacity = "1"}
                                    >
                                        SIGN OUT
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
