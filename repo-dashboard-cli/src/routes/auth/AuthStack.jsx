import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import SignInPanel from "./SignInPanel";

const AuthStack = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route exact path="/" element={<SignInPanel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AuthStack;
