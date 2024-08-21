import { useState } from "react";
import "../assets/styles.css"

const Header = () => {

    const [isLoggedIn , setLoggedIn] = useState(false);

    const handleLogin = () => {
        console.log('Login');
        setLoggedIn(!isLoggedIn);
    }

    return (
        <div className="header">
            <div className="h-fir">Logo</div>

            <div className="h-sec">
                <span>Home</span>
                <span>About</span>
                <span>Component</span>
                <span> <button onClick={handleLogin}> {isLoggedIn ? "LogOut" : "Login"} </button> </span>
            </div>
        </div>
    );
};

export default Header;