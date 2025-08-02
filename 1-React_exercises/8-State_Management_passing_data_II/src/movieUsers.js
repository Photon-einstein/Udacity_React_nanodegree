// src/MovieUsers.js

import React from "react";

const MovieUsers = ({ listUsers }) => {
  // This component's only job is to display the users
  // It receives the list of users as a prop
  return (
    <div>
      <p>Liked by:</p>
      <ul>
        {listUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieUsers;
