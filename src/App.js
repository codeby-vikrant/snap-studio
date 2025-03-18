import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import UploadForm from "./components/UploadForm";
import { useState } from "react";

const photos = [
  "https://picsum.photos/id/1001/200/200",
  "https://picsum.photos/id/1002/200/200",
  "https://picsum.photos/id/1003/200/200",
  "https://picsum.photos/id/1004/200/200",
  "https://picsum.photos/id/1005/200/200",
  "https://picsum.photos/id/1006/200/200",
];

function App() {
  const [items, setItems] = useState(photos);
  const [isCollapsed, collapsed] = useState(false);
  const toggle = () => collapsed(!isCollapsed);

  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        <button className="btn btn-success float-end" onClick={toggle}>
          +Add
        </button>
        <UploadForm isVisible={isCollapsed} />
        <h1>Gallery</h1>
        <div className="row">
          {items.map((photo) => (
            <Card src={photo} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
