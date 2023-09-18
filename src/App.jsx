import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Nav from "./Common/Nav";
import Users from "./Common/Users/Users";
import UsersIndex from "./Common/Users/UsersIndex";
import User from "./Common/Users/User";
import Admin from "./Admin/Admin";

const App = () => {
  return (
    <div>
      <Router>
        <div className="container">
          <Nav />
          <Routes>
            <Route path="/" element={<Users />}>
              <Route path="/" element={<UsersIndex />} />
              <Route path="/:id" element={<User />} />
            </Route>
            <Route path="admin/*" element={<Admin />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
