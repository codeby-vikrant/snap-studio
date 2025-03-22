import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Provider from "./context/FirestoreContext";
import AuthProvider, { useAuthContext } from "./context/AuthContext";
import Layout from "./components/Layout";
import StockImages from "./components/StockImages";

function AppRoutes() {
  const { currentUser } = useAuthContext();
  <Routes>
    <Route path="/" element={<App />} />
    {currentUser && <Route path="/stockimages" element={<StockImages />} />}
  </Routes>;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider>
        <Router>
          <Layout>
            <AppRoutes />
          </Layout>
        </Router>
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
