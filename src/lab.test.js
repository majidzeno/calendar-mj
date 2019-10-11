import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import "@testing-library/react/cleanup-after-each";
import "jest-axe/extend-expect";
import "@testing-library/jest-dom/extend-expect";

const Form = () => {
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" placeholder="username" name="username" />
    </form>
  );
};

test("this form is accssible", async () => {
  const { container } = render(<Form />);
  const results = await axe(container.innerHTML);

  expect(results).toHaveNoViolations();
});
