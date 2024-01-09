import React from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="h-screen flex justify-center bg-[#fafafa]">
      <div className="w-[1920px] flex">
        <SideBar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
