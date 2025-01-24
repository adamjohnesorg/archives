import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import NoPage from "./pages/NoPage";

export default function App() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="Home" element={<Home />} />
              <Route path="PageOne" element={<PageOne />} />
              <Route path="PageTwo" element={<PageTwo />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }