import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import AdamJohnes from "./pages/AdamJohnes"
import BrandonSanfilippo from "./pages/BrandonSanfilippo";
import TonyVitale from "./pages/TonyVitale";
import TimHarmon from "./pages/TimHarmon";
import CalebMcClintock from "./pages/CalebMcClintock";
import NoahFahnestock from "./pages/NoahFahnestock";
import AlexDavis from "./pages/AlexDavis";
import TreyAguirre from "./pages/TreyAguirre";
import JesseSimmons from "./pages/JesseSimmons";
import JacobFile from "./pages/JacobFile";

import Standings from "./pages/Standings";
import Rosters from "./pages/Rosters";
import Drafts from "./pages/Drafts";
import Champions from "./pages/Champions";

const Router = ({ members }) => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Home' element={<Home/>} />
    <Route path='/AdamJohnes' element={<AdamJohnes members = { members }/>} />
    <Route path='/BrandonSanfilippo' element={<BrandonSanfilippo members = { members }/>} />
    <Route path='/TonyVitale' element={<TonyVitale members = { members }/>} />
    <Route path='/TimHarmon' element={<TimHarmon members = { members }/>} />
    <Route path='/CalebMcClintock' element={<CalebMcClintock members = { members }/>} />
    <Route path='/NoahFahnestock' element={<NoahFahnestock members = { members }/>} />
    <Route path='/AlexDavis' element={<AlexDavis members = { members }/>} />
    <Route path='/TreyAguirre' element={<TreyAguirre members = { members }/>} />
    <Route path='/JesseSimmons' element={<JesseSimmons members = { members }/>} />
    <Route path='/JacobFile' element={<JacobFile members = { members }/>} />
    <Route path='/Standings' element={<Standings />} />
    <Route path='/Rosters' element={<Rosters />} />
    <Route path='/Drafts' element={<Drafts />} />
    <Route path='/Champions' element={<Champions />} />
    <Route path='/*' element={<NoPage />} />
  </Routes>
);

export default Router;