import React from "react";
import { render } from "@testing-library/react";
import SearchBar from "./SearchBar";

// smoke test
it("renders without crashing", function(){
    render(<SearchBar />);
});

// snapshot
it("matches snapshot", function() {
    const { asFragment } = render(<SearchBar />);
    expect (asFragment()).toMatchSnapshot();
});