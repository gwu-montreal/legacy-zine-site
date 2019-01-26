import React from "react";
import { Root, Routes } from "react-static";
import { Link } from "@reach/router";
import Headroom from "react-headroom";

import "./reboot.css";
import "./app.css";

const Header = () => (
  <Headroom>
    <div className="container">
      <nav className="head">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div className="head-right">
          <Link to="/">Work</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </div>
  </Headroom>
);

export default function App() {
  return (
    <Root>
      <Header />
      <div className="container">
        <Routes />
      </div>
    </Root>
  );
}
