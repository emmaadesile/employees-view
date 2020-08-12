import React from "react";
import { Link } from "react-router-dom";
import useAllUsers from "../../hooks/useAllUsers";
import { Container, Title, TableRow, TableHead } from "./styles";
import User from "./interface";

const Users: React.FC = () => {
  const users = useAllUsers();

  return (
    <Container>
      <Title>Users</Title>
      <TableHead>
        <p>First Name</p>
        <p>Last Name</p>
        <p className="emailHead">Email</p>
        <p>Gender</p>
        <p>Phone</p>
      </TableHead>
      {users.map((user: User, index: number) => (
        <React.Fragment key={index}>
          <TableRow>
            <Link to={`/user/${user.id}`} data-testid="user-link">
              <p className="firstName">{user.first_name}</p>
            </Link>
            <p className="lastName">{user.last_name}</p>
            <p className="email">{user.email}</p>
            <p className="gender">{user.gender}</p>
            <p className="phone">{user.phone}</p>
          </TableRow>
        </React.Fragment>
      ))}
    </Container>
  );
};

export default Users;
