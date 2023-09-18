import React, { useState, useEffect } from "react";
import { listUsers } from "./UsersService";
import UserCard from "./UserCard";

const UsersIndex = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await listUsers();
      console.log(data);
      setUsers(data);
    })();
  }, []);

  if(users === null){
    return <div className="loading-text">Loading ...</div>
  }

  return (
    <div className="users-cards-container">
      {users.map((item) => (
        <UserCard key={item.id} user={item}/>
      ))}
    </div>
  );
};

export default UsersIndex;
