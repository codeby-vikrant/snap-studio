import Navbar from "./Navbar";
import UploadForm from "./UploadForm";
import { useContext } from "react";
import { Context } from "../context/FirestoreContext";

function Layout({ children }) {
  const { dispatch, state } = useContext(Context);
  const { isCollapsed: isVisible, inputs } = state;
  const toggle = (bool) => dispatch({ type: "collapsed", payload: { bool } });
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <button
          className="btn btn-success float-end"
          onClick={() => toggle(!isVisible)}
        >
          {isVisible ? "Close" : "+ Add"}
        </button>
        <div className="clearfix mb-4"></div>
        <UploadForm inputs={inputs} isVisible={isVisible} />
        {children}
      </div>
    </>
  );
}
export default Layout;
