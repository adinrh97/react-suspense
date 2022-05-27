import React from "react";
import fetcher from "../helper/fetcher";

const resource = fetcher("https://jsonplaceholder.typicode.com/users");

const UserList = () => {
  const userList = resource.read();

  const renderUsers = userList.map((user) => {
    return <li key={user.id}>{user.name}</li>;
  });

  return (
    <div>
      <h3>Users</h3>
      <ol className="todos">{renderUsers}</ol>
    </div>
  );
};

export default UserList;
