import React from "react";
import {
  render,
  getByText,
  getByAltText,
  getByTestId,
} from "@testing-library/react";
import UserDetails from "../pages/userDetail";

jest.mock("react-router-dom", () => {
  const userId = 1;

  return {
    useParams: jest.fn(() => ({ userId })),
  };
});

jest.mock("../hooks/useSingleUser", () =>
  jest.fn(() => ({
    id: 1,
    first_name: "Wood",
    last_name: "Cleobury",
    email: "wcleobury1@taobao.com",
    gender: "Male",
    phone: 1272716107,
  }))
);

afterEach(() => {
  jest.clearAllMocks();
});

test("should render user detail page", () => {
  const { container } = render(<UserDetails />);
  const user = {
    id: 1,
    first_name: "Wood",
    last_name: "Cleobury",
    email: "wcleobury1@taobao.com",
    gender: "Male",
    phone: 1272716107,
  };

  expect(getByText(container, /user details/i)).toBeInTheDocument();
  expect(getByText(container, /summary/i)).toBeInTheDocument();
  expect(getByAltText(container, /avatar/i)).toBeInTheDocument();
  expect(getByTestId(container, "fullname")).toHaveTextContent(
    `${user.first_name} ${user.last_name}`
  );

  expect(getByTestId(container, "email")).toHaveTextContent(user.email);
  expect(getByTestId(container, "phone")).toHaveTextContent(String(user.phone));
  expect(getByTestId(container, "gender")).toHaveTextContent(user.gender);
});
