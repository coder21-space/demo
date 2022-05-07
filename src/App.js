import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//import About from "./components/About";
import Home from "./components/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Invoice from "./routers/Invoice";
import NotFound from "./components/NotFound";
import { Dashboard } from "./components/Dashboard";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import Business from "./components/Business";
import Other from "./components/Other";
import Company from "./components/Company";
import Datafun from "./routers/Datafun";
//import { Frontend } from "./components/Frotent.js/Frontend";
import { Contact } from "./components/Contact";
import { Admin } from "./components/Admin";
import { Backend } from "./components/Backend.js/Backend";
import Dashboard1 from "./components/Dashboard1";
import Dashboard2 from "./components/Dashboard2";
import Dashboard3 from "./components/Dashboard3";

const LazdAbout = React.lazy(() => import("./components/About"));

class App extends React.Component {
  render() {
    let isLogged = true;
    let data = {
      st: "please login first",
    };
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Suspense fallback={<h1 className="text-center">Loading...</h1>}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/Invoice/:category/:id" element={<Invoice />} />

              <Route
                path="/Dashboard/*"
                element={
                  isLogged ? (
                    <Dashboard />
                  ) : (
                    <Navigate to="/login" replace state={data} />
                  )
                }
              />
              <Route path="/Dashboard/Dashboard1" element={<Dashboard1 />} />
              <Route path="/Dashboard/Dashboard2" element={<Dashboard2 />} />
              <Route path="/Dashboard/Dashboard3" element={<Dashboard3 />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Logout" element={<Logout />} />
              <Route path="/Datafun" element={<Datafun />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/About/" element={<LazdAbout />}>
                {/* <Route index element={<Company />} />*/}
                <Route path="Company" element={<Company />} />
                <Route path="Business" element={<Business />} />
                <Route path="Other" element={<Other />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Routes>
              <Route path="/Admin" element={<Backend />}>
                <Route path="" element={<Admin />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
