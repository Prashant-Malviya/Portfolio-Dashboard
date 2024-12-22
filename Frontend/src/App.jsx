import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./pages/Content";
import { BrowserRouter as Router } from "react-router-dom";
import SmallNavbar from "./components/SmallNavbar";

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
