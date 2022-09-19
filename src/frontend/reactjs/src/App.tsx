import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import "./sass/main.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<h1>This is the home page</h1>} />
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
