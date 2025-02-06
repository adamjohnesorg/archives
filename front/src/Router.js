import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import AdamJohnes from "./pages/AdamJohnes"
import BrandonSanfilippo from "./pages/BrandonSanfilippo";

import Standings from "./pages/Standings";

const Router = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Home' element={<Home/>} />
    <Route path='/AdamJohnes' element={<AdamJohnes />} />
    <Route path='/BrandonSanfilippo' element={<BrandonSanfilippo />} />
    <Route path='/Standings' element={<Standings />} />
    <Route path='/*' element={<NoPage />} />
  </Routes>
);

export default Router;