import React from "react";
import useData from "../../data/useData";
import { Container, Title, TableRow, TableHead } from "./styles";
import User from './interface';

const Users = () => {
  const [users] = useData();

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
            <p className="firstName">{user.first_name}</p>
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
