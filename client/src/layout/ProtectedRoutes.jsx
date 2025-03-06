import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Index } from "../pages/Index";
import Footer from "./Footer";

export const ProtectedRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
      <Footer />
    </>
  );
};
