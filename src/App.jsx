import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Header from "./components/Header/Header";
import CarPage from "./pages/CarPage/CarPage";
import Container from "./components/Container/Container";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/catalog"
            element={<CatalogPage />}
          />
          <Route
            path="/car"
            element={<CarPage />}
          />

          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
