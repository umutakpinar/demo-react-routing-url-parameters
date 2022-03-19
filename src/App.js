import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Home from "./components/Home/Index.js";
import About from "./components/About/Index.js";
import Contact from "./components/Contact/Index.js";
import Users from "./components/Users/Index.js";
import User from "./components/User/Index.js";

function App() {

  return (
    <Router>
      <div className="container mx-auto my-lg-5">
        <nav>
          <ul className="list-unstyled">
            <li className="list-inline-item mx-2 bg-light p-3 border shadow rounded">
              <Link to={"/"}> Home </Link>
            </li>
            <li className="list-inline-item mx-2 bg-light p-3 border shadow rounded">
              <Link to={"/about"}> About </Link>
            </li>
            <li className="list-inline-item mx-2 bg-light p-3 border shadow rounded  mb-5">
              <Link to={"/contact"}> Contact </Link>
            </li>
            <li className="list-inline-item mx-2 bg-light p-3 border shadow rounded  mb-5">
              <Link to={"/users"}> Users </Link>
            </li>
          </ul>
        </nav>

        <div className="container">
          <div className="bg-light border rounded shadow-lg p-3">
            <Routes>
              <Route path={"/"} element={<Home />}></Route>

              <Route path={"/about"} element={<About />}></Route>

              <Route path={"/contact"} element={<Contact />}></Route>
              
              <Route path={"/users"} element={<Users/>}></Route>

              <Route path="/user/:id" element={ <User/> }></Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
