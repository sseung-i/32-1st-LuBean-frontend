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
import SignUpIntro from "./pages/Signup/SignUpIntro";
import SignUp from "./pages/Signup/SignUp";
import SignUpDone from "./pages/Signup/SignUpDone";

//Nav
import Nav from "./components/Nav/Nav";
//Footer
import Footer from "./components/Footer/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup_intro" element={<SignUpIntro />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup_done" element={<SignUpDone />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
