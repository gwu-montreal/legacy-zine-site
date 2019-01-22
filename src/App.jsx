import React from "react";
import { Root, Routes } from "react-static";
import { Link } from "@reach/router";
import Headroom from "react-headroom";

import "./app.css";

export default function App() {
  return (
    <Root>
      <Headroom>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </Headroom>
      <div className="content">
        <Routes />
      </div>
    </Root>
  );
}
