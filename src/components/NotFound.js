import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <button className="btn btn-link mb-5">Back</button>
      <div className="d-flex justify-content-center align-items-center"></div>
      <h1>Looks like you are lost</h1>
    </>
  );
};

export default NotFound;
