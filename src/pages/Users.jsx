import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./User.css"; 

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1&per_page=6")
      .then((res) => res.json())
      .then((data) => setUsers(data.data))
      .catch((err) => console.error("Ошибка загрузки пользователей:", err));
  }, []);

  return (
    <div className="users-container">
      <h1 className="neon-title">Users List</h1>
      <ul className="users-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <img src={user.avatar} alt={user.first_name} className="user-avatar" />
            <div className="user-info">
              <h2>{user.first_name} {user.last_name}</h2>
              <p>{user.email}</p>
              <Link to={`/users/${user.id}`} className="details-link">View Details</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
