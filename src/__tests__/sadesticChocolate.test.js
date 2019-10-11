import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import { GreetingLoader } from "./sadesticChocolate";
// import { loadGreeting as mockLoadGreeting } from "./api";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/react/cleanup-after-each";

// jest.mock("./api", () => {
//   return {
//     loadGreeting: jest.fn(subject =>
//       Promise.resolve({
//         data: {
//           greeting: `Hi ${subject}`
//         }
//       })
//     )
//   };
// });

test("Loads greeting on click", async () => {
	const mockLoadGreeting = jest.fn(subject =>
		Promise.resolve({
			data: {
				greeting: `Hi ${subject}`
			}
		})
	);
	const { getByLabelText, getByText, getByTestId, debug } = render(
		<GreetingLoader loadGreeting={mockLoadGreeting} />
	);

	const // form = getByTestId("form"),
		nameInput = getByLabelText(/name/i),
		greetingText = getByTestId("greeting"),
		submitButton = getByText(/load greeting/i);

	// nameInput.value = "MAry";
	fireEvent.change(nameInput, { target: { value: "Mohamed" } });
	fireEvent.click(submitButton);
	expect(mockLoadGreeting).toHaveBeenCalledTimes(1);
	expect(mockLoadGreeting).toHaveBeenCalledWith(`Mohamed`);
	await wait(() => expect(greetingText).toHaveTextContent(`Hi Mohamed`));
	debug();
	// console.log("form -> ", form);
	// console.log("nameInput -> ", nameInput.innerHTML);
	// console.log("greetingText -> ", greetingText);
	// console.log("submitButton -> ", submitButton);
});
