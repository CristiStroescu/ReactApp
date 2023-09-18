import React from "react";
import { deleteUser } from "../Common/Users/UsersService";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const UserCardAdmin = (props) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await deleteUser(props.user.id);
      alert(`Deleted user with the name "${props.user.name}" and ID ${props.user.id}.`);
    } catch (e) {
      console.warn(e);
      navigate(`/admin`);
    }
  };

  return (
    <div className="user-card-admin-styles">
      <div>
        <p className="card-text">Id: {props.user.id}</p>
        <br />
        <p className="card-text">Name: {props.user.name}</p>
        <br />
        <p className="card-text">Email: {props.user.email}</p>
        <br/>
      </div>
      <div className="admin-buttons">
        <Link to={props.user.id.toString()}>
          <button className="update-button">Update</button>
        </Link>
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCardAdmin;
