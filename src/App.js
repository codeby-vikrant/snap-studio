import "./App.css";
import app from "./lib/firebase.config";
import Card from "./components/Card";
import Layout from "./components/Layout";
import { Context } from "./context";
import { useMemo, useContext, useEffect } from "react";

function App() {
  const { state } = useContext(Context);
  const count = useMemo(() => {
    return `You have ${state.items.length} image${
      state.items.length > 1 ? "s" : ""
    }`;
  }, [state.items]);

  useEffect(() => {
    app();
  }, []);

  return (
    <Layout>
      <h1 className="text-center">Gallery</h1>
      {count}
      <div className="row">
        {state.items.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </Layout>
  );
}

export default App;
