import { useAuthContext } from "../context/AuthContext";

const Profile = () => {
  const { currentUser } = useAuthContext();
  return (
    <>
      <h1 className="text-center">Profile</h1>
      <hr style={{ width: "50%", margin: "3rem auto" }} />
      <div className="d-flex justify-content-center align-items-center">
        <img
          style={{ borderRadius: "4px" }}
          src={currentUser?.photoURL}
          alt={currentUser?.displayName}
          width=""
        ></img>
        <ul className="list-group mx-5">
          <li className="list-group-item">
            <span className="fs-5 text-capitialize">name:</span>---
          </li>
          <li className="list-group-item">
            <span className="fs-5 text-capitialize">email:</span>---
          </li>
          <li className="list-group-item">
            <span className="fs-5 text-capitialize"></span>---
          </li>
          <li className="list-group-item">
            <span className="fs-5 text-capitialize"></span>---
          </li>
          <li className="list-group-item">
            <span className="fs-5 text-capitialize"></span>---
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
