import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageOne from "./pages/PageOne"
import PageTwo from "./pages/PageTwo";
import NoPage from "./pages/NoPage";

const Router = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Home' element={<Home />} />
    <Route path='/PageTwo' element={<PageTwo />} />
    <Route path='/PageOne' element={<PageOne />} />
    <Route path='/*' element={<NoPage />} />
  </Routes>
);

export default Router;