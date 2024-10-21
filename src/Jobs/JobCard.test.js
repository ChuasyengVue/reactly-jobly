import React from "react";
import { render } from "@testing-library/react";
import JobCard from "./JobCard";
import { UserProvider } from "../Auth/UserContext";


const job = {
    id: 1,
    title: "Software Engineer",
    companyHandle: "Google",
    salary: 120000,
    equity: 0.1
  };

it("renders without crashing", function() {
    render(<JobCard />);
});

it("matches snapshot",function() {
    const { asFragment } = render(
        <UserProvider>
            <JobCard  job={job}/>
        </UserProvider>
    
);
    expect(asFragment()).toMatchSnapshot();
})