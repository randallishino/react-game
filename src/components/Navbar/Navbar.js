import React from "react";
import { Navbar } from 'react-bootstrap';

const Nav = props => (


    <Navbar>
        <Navbar.Text className="nav-title">
            NBA React Memory Game
        </Navbar.Text>
        <Navbar.Text className="nav-score">
        <li>Score: <span>{props.counter}</span> | High Score: {props.highScore}</li>
        </Navbar.Text>
    </Navbar>
  );
  

export default Nav;
