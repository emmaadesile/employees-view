// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { render, getByText } from "@testing-library/react";
// import UserDetails from "../pages/userDetail";

// jest.mock("react-router-dom", () => {
//   const userId = 1;

//   return {
//     useParams: () => ({ userId }),
//   };
// });

// test("should render user detail page", () => {
//   const { container } = render(
//     <Router>
//         <UserDetails />
//     </Router>
//   );

//   const pageTitle = getByText(container, /user details/i);

//   expect(pageTitle).toBeInTheDocument();
// });
