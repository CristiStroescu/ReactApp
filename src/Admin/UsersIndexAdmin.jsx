import React, {useState, useEffect} from "react";
import { listUsers } from "../Common/Users/UsersService";
import UserCardAdmin from "./UserCardAdmin";
import { Link } from "react-router-dom";

const UsersIndexAdmin = () =>{
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
      <div>
        <div className="button-header">
        <Link to="new" className="link-button">
          <button className="button">Create new</button>
        </Link>
      </div>
        <div className="users-cards-container">
      {users.map((item) => (
        <UserCardAdmin key={item.id} user={item}/>
      ))}
    </div>
      </div>
    );
};

export default UsersIndexAdmin;