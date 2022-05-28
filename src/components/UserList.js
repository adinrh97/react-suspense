import React from "react";

const UserList = ({resource}) => {
  const userList = resource.user.read();

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
