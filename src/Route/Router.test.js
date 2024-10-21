import React from "react";
import { render } from "@testing-library/react";
import Router from "./Router";
import { MemoryRouter } from "react-router-dom";
import { UserProvider } from "../Auth/UserContext";

//smoke test
it('renders without crashing', function() {
    render(<MemoryRouter>
        <Router />
    </MemoryRouter>);
});

it("matches snapshot", function() {
    const { asFragment } = render(
        <MemoryRouter>
            <Router />
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

it("renders Homepage", function () {
    render(
        <MemoryRouter initialEntries={["/"]}>
            <Router login={() => {}} signup={() => {}} />
        </MemoryRouter>
    );
    expect(screen.getByText("Welcome to Jobly!")).toBeInTheDocument();
});