import React from "react";
import FavouriteNumber from "./favNum";
import RenderDOM from "react-dom";
import { toHaveAttribute, toHaveTextContent } from "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { getQueriesForElement } from "@testing-library/dom";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

// test('renders a number input with  a lable "Favourite Number "', () => {
//   const { getByLabelText } = render(<FavouriteNumber />);
//   console.log(document.body.outerHTML);
//   const input = getByLabelText(/favourite number/i);
//   expect(input).toHaveAttribute("type", "number");
// });

test("entering an invalid value shows an error message", () => {
  const {
    getByLabelText,
    debug,
    getByTestId,
    queryByTestId,
    rerender
  } = render(<FavouriteNumber />);
  const input = getByLabelText(/favourite number/i);
  fireEvent.change(input, { target: { value: 10 } });
  debug();
  let errorMsg = getByTestId("error-message");
  expect(errorMsg).toHaveTextContent(/this number is invalid/i);
  rerender(<FavouriteNumber max={10} />);
  // expect(getByTestId("flag")).toHaveTextContent(/valid/i);
  expect(queryByTestId("error-message")).toBeNull();
});
