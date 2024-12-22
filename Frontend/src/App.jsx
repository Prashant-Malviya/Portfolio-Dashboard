import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./pages/Content";
import SmallNavbar from "./components/smallNavbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
      <Router>
    <div className="bg-gray-100 min-h-screen">
      <Header />
        <Content />
      <Sidebar />
      <SmallNavbar />
    </div>
      </Router>
  );
}

export default App;
