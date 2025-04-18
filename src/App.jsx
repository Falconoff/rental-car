// import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CarPage from "./pages/CarPage/CarPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
// import Container from "./components/Container/Container";

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
            path="/catalog/:carId"
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
