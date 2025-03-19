import "./App.css";
import Card from "./components/Card";
import Layout from "./components/Layout";
import { Context } from "./context";
import { useMemo, useContext } from "react";

function App() {
  const { dispatch, state } = useContext(Context);
  const toggle = (bool) => dispatch({ type: "collapsed", payload: { bool } });
  const handleOnChange = (e) =>
    dispatch({ type: "setInputs", payload: { value: e } });
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "setItem" });
    toggle(!state.isCollapsed);
  };

  const count = useMemo(() => {
    return `You have ${state.items.length} image${
      state.items.length > 1 ? "s" : ""
    }`;
  }, [state.items]);

  return (
    <Layout
      state={state}
      onChange={handleOnChange}
      onSubmit={handleOnSubmit}
      toggle={toggle}
    >
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
