import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Provider from "./context/FirestoreContext";
import AuthProvider from "./context/AuthContext";
import Layout from "./components/Layout";

function Stocks() {
  return <h1>My Stock Images</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/stocks" element={<Stocks />} />
            </Routes>
          </Layout>
        </Router>
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
