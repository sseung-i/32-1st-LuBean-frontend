import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Main
import Main from "./pages/Main/Main";
//List
import List from "./pages/List/List";
//Detail
import Detail from "./pages/Detail/Detail";
//Login
import Login from "./pages/Login/Login";
//SignUp
import SignUp from "./pages/Signup/SignUp";

//Nav
import Nav from "./components/Nav/Nav";
//Footer
import Footer from "./components/Footer/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/nav" element={<Nav />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
