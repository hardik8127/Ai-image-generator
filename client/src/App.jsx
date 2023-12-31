import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className=" w-full justify-between items-center bg-white sm:px-8 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
      <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>
      <Link to = "/Create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md absolute top-2 right-5">Create</Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9faffe] min-h-[calc(100vh-73px)]">
      <Routes>
      <Route path="/" element = {<Home/>}  />
      <Route path="/Create-Post" element = {<CreatePost/>}  />
      </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
