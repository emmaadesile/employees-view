import React from "react";
import {
  render,
  getByText,
  getAllByTestId,
} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Users from "../pages/users";

jest.mock("../hooks/useAllUsers", () =>
  jest.fn(() => [
    {
      id: 1,
      first_name: "Wood",
      last_name: "Cleobury",
      email: "wcleobury1@taobao.com",
      gender: "Male",
      phone: 1272716107,
    },
    {
      id: 2,
      first_name: "Romeo",
      last_name: "Duerdin",
      email: "rduerdin0@reddit.com",
      gender: "Male",
      phone: 6638243591,
    },
  ])
);

afterEach(() => {
  jest.clearAllMocks();
});

describe("All users", () => {
  test("shows all users", () => {
    const { container } = render(
      <Router>
        <Users />
      </Router>
    );

    const tableHeaders = [
      /users/i,
      /first name/i,
      /last name/i,
      /email/i,
      /gender/i,
      /phone/i,
    ];

    tableHeaders.forEach((header: RegExp): void => {
      let headerText = getByText(container, header);
      expect(headerText).toBeInTheDocument();
    });

    const userLink = getAllByTestId(container, "user-link")[0];
    expect(userLink).toHaveAttribute('href', '/user/1');

    // const homeTitle = getByText(container, /users/i);
    // const firstName = getByText(container, /first name/i);
    // const lastName = getByText(container, /last name/i);
    // const email = getByText(container, /email/i);
    // const gender = getByText(container, /gender/i);
    // const phone = getByText(container, /phone/i);

    // expect(homeTitle).toBeInTheDocument();
    // expect(firstName).toBeInTheDocument();
    // expect(lastName).toBeInTheDocument();
    // expect(email).toBeInTheDocument();
    // expect(gender).toBeInTheDocument();
    // expect(phone).toBeInTheDocument();
  });
});
