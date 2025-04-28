// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import "./App.css";
import Header from "./components/Header/Header";
// import HomePage from "./pages/HomePage/HomePage";
const HomePage = lazy(() =>
  import("./pages/HomePage/HomePage.jsx"),
);
// import CatalogPage from "./pages/CatalogPage/CatalogPage";
const CatalogPage = lazy(() =>
  import("./pages/CatalogPage/CatalogPage.jsx"),
);
// import CarPage from "./pages/CarPage/CarPage";
const CarPage = lazy(() =>
  import("./pages/CarPage/CarPage.jsx"),
);
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage.jsx"),
);
import Loader from "./components/Loader/Loader";
// import Container from "./components/Container/Container";

function App() {
  return (
    <Suspense fallback={<Loader />}>
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
            path="/*"
            element={<NotFoundPage />}
          />
        </Routes>
      </main>
    </Suspense>
  );
}

export default App;
