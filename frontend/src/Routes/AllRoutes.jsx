import React from "react";
import { Route, Routes } from "react-router-dom/dist";
import { Dashboard } from "../Pages/Dashboard";
import { Login } from "../Pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import { AddBook } from "../Pages/AddBook";
import { SignUp } from "../Pages/SignUp";

export const AllRoutes = () => {
  return <div>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/addbook" element={
        <PrivateRoute>
          <AddBook/>
        </PrivateRoute>
      }/>
    </Routes>
  </div>;
};
