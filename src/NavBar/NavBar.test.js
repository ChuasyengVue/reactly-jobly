import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";
import { UserProvider } from "../Auth/UserContext";

//smoke test
it("renders without crashing", function() {
    render(
        <MemoryRouter>
            <NavBar />
        </MemoryRouter>
    );
});

// snapshot
it('it matches snapshot', function() {
    const { asFragment } = render(
        <MemoryRouter>
            <NavBar />
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

it("it matches snapshot when logged out", function () {
    const { asFragment } = render(
        <MemoryRouter>
          <UserProvider currentUser={null}>
            <NavBar />
          </UserProvider>
        </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  