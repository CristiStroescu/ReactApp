import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { retrieveUser } from "./UsersService";

const User = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const user = await retrieveUser(id);
      console.log(user);
      setUser(user);
    })();
  }, [id]);

  if (user === null) {
    return <div className="loading-text">Loading user...</div>;
  }

  return (
    <div>
      <div className="button-header">
        <button className="button" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>

      <div className="user-card-extended">
        <p>Id: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Address:</p>
        <p>Street: {user.address.street}</p>
        <p>Suite: {user.address.suite}</p>
        <p>City: {user.address.city}</p>
        <p>Zipcode: {user.address.zipcode}</p>
        <p>Geo: </p>
        <p>Latitude: {user.address.geo.lat}</p>
        <p>Longitude: {user.address.geo.lng}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        <p>Company: </p>
        <p>Name: {user.company.name}</p>
        <p>Moto: {user.company.catchPhrase}</p>
        <p>Business: {user.company.bs}</p>
      </div>
    </div>
  );
};

export default User;
