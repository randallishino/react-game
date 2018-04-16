import React from "react";
import { Navbar } from 'react-bootstrap';

const Nav = props => (


    <Navbar>
        <Navbar.Text className="nav-title">
            NBA React Memory Game
        </Navbar.Text>
        <Navbar.Text className="nav-score">
            {props.children}
        </Navbar.Text>
    </Navbar>
  );
  