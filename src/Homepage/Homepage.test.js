import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Homepage from "./Homepage";
import { UserProvider } from "../Auth/UserContext";

//smoke test
it('renders without crashing', function () {
    render(<Homepage />);
});

//snapshot
it("matches snapshot", function() {
    const { asFragment } = render(
        <MemoryRouter>
            <UserProvider  currentUser={null}>
                <Homepage />
            </UserProvider>
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

