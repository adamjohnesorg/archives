import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

import Standings from "./pages/Standings";
import Rosters from "./pages/Rosters";
import Drafts from "./pages/Drafts";
import Champions from "./pages/Champions";

const Router = ({ members }) => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Home' element={<Home/>} />
    <Route path='/Standings' element={<Standings members = { members } />} />
    <Route path='/Rosters' element={<Rosters />} />
    <Route path='/Drafts' element={<Drafts />} />
    <Route path='/Champions' element={<Champions />} />
    <Route path='/*' element={<NoPage />} />
  </Routes>
);

export default Router;