import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';
import { UserProvider } from "../Auth/UserContext";

//smoke test
it("renders without crashing", function() {
    render(
        <MemoryRouter>
            <ProtectedRoute />
        </MemoryRouter>
    );
});

// snapshot
it('it matches snapshot', function() {
    const { asFragment } = render(
        <MemoryRouter>
            <ProtectedRoute />
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot when logged out", function() {
    const { asFragment } = render(
        <MemoryRouter>
            <UserProvider currentUser={null}>
            <ProtectedRoute />
            </UserProvider>
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
})