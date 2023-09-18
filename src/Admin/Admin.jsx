import React from "react";
import { Routes, Route } from "react-router-dom";
import UsersIndexAdmin from "./UsersIndexAdmin";
import UserEdit from "../Common/Users/UserEdit";
import UserCreate from "../Common/Users/UserCreate";

const Admin = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UsersIndexAdmin />} />
        <Route path="/:id" element={<UserEdit/>}/> 
        <Route path="/new" element={<UserCreate/>} />
      </Routes>
    </div>
  );
};

export default Admin;
