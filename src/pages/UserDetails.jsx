import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./UserDetails.css";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("User not found");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data.data);
        setLoading(false);
      })
      .catch(() => {
        setUser(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!user) {
    return <h2>User Not Found</h2>;
  }

  return (
    <div className="user-details-container">
      <h1 className="neon-title-details">{user.first_name} {user.last_name}</h1>
      <img src={user.avatar} alt={user.first_name} className="user-avatar-details" />
      <div className="user-info-details">
        <p>Email: {user.email}</p>
      </div>
      <Link to="/users" className="back-link">← Back to Users</Link>
    </div>
  );
};

export default UserDetails;
