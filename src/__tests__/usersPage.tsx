import React from "react";
import { render, getByText, } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Users from "../pages/users";

test("shows all users", () => {
  const { container } = render(
    <Router>
      <Users />
    </Router>
  );
  const title = getByText(container, /users/i);

  expect(container).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
