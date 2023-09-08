import React from 'react';
import logo from '../assets/lws-logo.svg'

const Header = () => {
    return (
        <div>
            <header id="header">
                <div class="container">
                    <img src={logo} alt="logo" class="logo" />
                    <div class="flex items-center">
                        <a class="text-white min-w-[50px] font-medium" href="#">Home</a>
                        <button class="log-btn btn">Login</button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;