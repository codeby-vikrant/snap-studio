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
import NotFound from "./components/NotFound";
import Single from "./components/Single";
import Profle from "./components/Profile";

function AppRoutes() {
  const { currentUser } = useAuthContext();
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/images/:id" element={<Single />}></Route>
    <Route path="*" element={<NotFound />}></Route>
    <Route path="/profile" element={<Profle />}></Route>
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
