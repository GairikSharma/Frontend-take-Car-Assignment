import React, { useContext } from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import { carContext } from "./context";

function Routing() {
  // const {page} = useContext(carContext)
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/:page' element={<LandingPage />}></Route>
          <Route path='/' element={<Navigate to='/1' />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routing;
