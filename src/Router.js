import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Main
import Main from "./pages/main/Main";
//List
import List from "./pages/list/List";
//Detail
import Detail from "./pages/detail/Detail";
//Login
import Login from "./pages/login/Login";
//SignUp
import SignUp from "./pages/signup/SignUp";

//Nav
import Nav from "./components/nav/Nav";
//Footer
import Footer from "./components/footer/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
