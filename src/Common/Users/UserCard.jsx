import React from "react";
import { Link } from "react-router-dom";

const UserCard = (props) => {
  return (
      <Link to={props.user.id.toString()} className="user-card-styles">
        <div>
          <p className="card-text">Id: {props.user.id}</p>
          <br/>
          <p className="card-text">Name: {props.user.name}</p>
          <br/>
          <p className="card-text">Email: {props.user.email}</p>
        </div>
      </Link>
  );
};

export default UserCard;
