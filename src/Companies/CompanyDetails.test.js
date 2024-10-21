import React from "react";
import CompanyDetail from "./CompanyDetails";
import { MemoryRouter, Route } from "react-router-dom";
import { UserProvider } from "../Auth/UserContext";

it("renders without crashing", function () {
  render(
      <MemoryRouter>
        <UserProvider>
          <CompanyDetail />
        </UserProvider>
      </MemoryRouter>,
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter initialEntries={["/company/ibm"]}>
        <UserProvider>
          <Route path="/company/:handle">
            <CompanyDetail />
          </Route>
        </UserProvider>
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
