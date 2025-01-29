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
        <div className="App">
            <header className="App-header">
                <p>A simple React app.....</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer">
                    Learn React
                </a>
                <form
                    action="../../post"
                    method="post"
                    className="form">
                    <button type="submit">
                        Connected?
                    </button>
                </form>
            </header>
        </div>
      </div>
    );
  }