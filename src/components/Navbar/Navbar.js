import React from "react";
import { Navbar } from 'react-bootstrap';
import "./Navbar.css";
const Nav = props => (


    <Navbar>
        <Navbar.Text className="nav-title">
         NBA React Memory Game
        </Navbar.Text>
        <Navbar.Text className="nav-score">
        <p className="score">Score: <span>{props.counter}</span></p>
        <p className="high-score">High Score: {props.highScore}</p>
        </Navbar.Text>
    </Navbar>
  );
  

export default Nav;
