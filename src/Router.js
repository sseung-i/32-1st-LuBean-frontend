import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import List from "./pages/List/List";
import Detail from "./pages/Detail/Detail";
import Login from "./pages/Login/Login";
//SignUp
import SignUpIntro from "./pages/Signup/SignUpIntro";
import SignUp from "./pages/Signup/SignUp";
import SignUpDone from "./pages/Signup/SignUpDone";

//Nav
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list/:pageName" element={<List />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup_intro" element={<SignUpIntro />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup_done" element={<SignUpDone />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
