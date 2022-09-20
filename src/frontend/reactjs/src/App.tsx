import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import Home from "./pages/Home";
import NavbarLayout from "./layouts/NavbarLayout";

import "./sass/main.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavbarLayout />}>
          <Route index element={<Home />} />
          <Route path="/post" element={<h1>This is the post page</h1>} />

          {/* 
            <AuthRoutes>
              <Route path="/me">
                <Route index /> 
                <Route path="/posts">
                  <Route index />
                  <Route path="/new" /> 
                  <Route path="/edit" />
                </Route>
                 
                <Route path="/settings" />
              </Route> 
            </ AuthRoutes>
          */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
