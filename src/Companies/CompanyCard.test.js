import React from "react";
import { render } from "@testing-library/react";
import CompanyCard from "./CompanyCard";
import { MemoryRouter } from "react-router";

it("matches snapshot with logo", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <CompanyCard
            handle="SpringBoard"
            name="SpringBoard"
            description="Become an exceptional developer in 16 weeks."
            logo_url=""
        />
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot without logo", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <CompanyCard
            handle="SpringBoard"
            name="SpringBoard"
            description="Become a coder in 10months"
        />
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
