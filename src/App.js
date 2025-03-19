import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import UploadForm from "./components/UploadForm";
import { useEffect, useState, useReducer } from "react";

const photos = [];

const initialState = {
  items: photos,
  count: photos.length,
  inputs: { title: null, file: null, path: null },
  isCollapsed: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "setItem":
      return {
        ...state,
        items: [action.payload.path, ...state.items],
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(useReducer, initialState);
  const [count, setCount] = useState();
  const [inputs, setInputs] = useState({ title: null, file: null, path: null });
  const [items, setItems] = useState(photos);
  const [isCollapsed, collapsed] = useState(false);
  const toggle = () => collapsed(!isCollapsed);
  const handleOnChange = (e) => {
    if (e.target.name === "file") {
      setInputs({
        ...inputs,
        file: e.target.files[0],
        path: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      setInputs({ ...inputs, title: e.target.value });
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // setItems([inputs.path, ...items]);
    dispatch({ type: "setItem", payload: { path: inputs } });
    setInputs({ title: null, file: null, path: null });
    collapsed(false);
  };
  useEffect(() => {
    console.log(state);
  }, [state.items]);

  useEffect(() => {
    setCount(`You have ${items.length} image${items.length > 1 ? "s" : ""}`);
  }, [items]);

  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        <button className="btn btn-success float-end" onClick={toggle}>
          {isCollapsed ? "Close" : "+ Add"}
        </button>
        <div className="clearfix mb-4"></div>
        <UploadForm
          inputs={inputs}
          isVisible={isCollapsed}
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
        />
        {count}
        <h1>Gallery</h1>
        <div className="row">
          {state.items.map((photo, index) => (
            <Card key={index} src={photo.path} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
