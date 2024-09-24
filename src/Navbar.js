// src/Navbar.js
import React from 'react';
import './Navbar.css';  // นำเข้า CSS สำหรับสไตล์

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href ="/">Numerical Method</a>
            </div>
            <ul className="navbar-links">
                <li className="dropdown">
                    <a>Root of Equation</a>
                    <ul className="dropdown-root">
                        <li><a href="bisection">Bisection Method</a></li>
                        <li><a href="newton">Newton-Raphson Method</a></li>
                        <li><a href="secant">Secant Method</a></li>
                        <li><a href="falsepo">False position Method</a></li>
                        <li><a href="garphical">Garphical Method</a></li>
                        <li><a href="onepoint">Onepoint Method</a></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a>Linear Algebra</a>
                    <ul className="dropdown-linear">
                        <li><a href="cramer">Cramer Rule</a></li>
                        <li><a href="gauss">Gauss Elimination</a></li>
                        <li><a href="sidel">Sidel</a></li>
                    </ul>
                </li>        
                <li className="dropdown">
                    <a>Interpolation</a>
                    <ul className="dropdown-interpolation">
                        <li><a href="regres">Linear Regression</a></li>
                        <li><a href="lagrange">Lagrange</a></li>
                        <li><a href="polynomial">Polynomial Regression</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
