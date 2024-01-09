import React from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafa]">
      <div className="flex-1 w-full bg-inherit max-w-screen-2xl flex">
      
      <SideBar/>
      <MainContent/>

      </div>
    </div>
  );
}

export default App;
