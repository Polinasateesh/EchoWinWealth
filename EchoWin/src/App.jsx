
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import NavBar from './NavBar'
const Schools = lazy(() => import("./Schools"));
const Hospitals = lazy(() => import("./Hospitals"));
const Restaurants = lazy(() => import("./Restaurants"));
const ShoppingMalls = lazy(() => import("./ShoppingMalls"));
import 'bootstrap/dist/css/bootstrap.min.css'
import Spinner from 'react-bootstrap/Spinner';



const App = () => {
  const CenteredCircularProgress = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
      }}
    >
      <Spinner animation="border" role="status" size='40'>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<CenteredCircularProgress/>}>
                <Schools />
              </Suspense>
            }
          />
          <Route
            path="/Hospitals"
            element={
              <Suspense fallback={<CenteredCircularProgress/>}>
                <Hospitals />
              </Suspense>
            }
          />
          <Route
            path="/Restaurants"
            element={
              <Suspense fallback={<CenteredCircularProgress/>}>
                <Restaurants />
              </Suspense>
            }
          />
          <Route
            path="/ShoppingMalls"
            element={
              <Suspense fallback={<CenteredCircularProgress/>}>
                <ShoppingMalls />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>

    </>
  );
};

export default App;