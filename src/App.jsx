import React from "react";
import { Root, Routes } from "react-static";

import Header from "./containers/Header";

import "./reboot.css";
import "./app.css";

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
