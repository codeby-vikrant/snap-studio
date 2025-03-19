import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import UploadForm from "./components/UploadForm";
import { useEffect, useState } from "react";

const photos = ["https://picsum.photos/id/1001/200/200"];

function App() {
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
    setItems([inputs.path, ...items]);
  };
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
          {items.map((photo, index) => (
            <Card key={index} src={photo} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
