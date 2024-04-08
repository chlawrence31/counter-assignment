// import necessary react testing library helpers here
// import the Counter component here
import React from "react";
import { render, fireEvent, screen} from "@testing-library/react";
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i)
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const counterNumber = screen.getByTestId("count");
  expect(counterNumber.textContent).toBe("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementButton = screen.getByText("+");
  const counterNumber = screen.getByTestId("count");
  fireEvent.click(incrementButton);
  expect(counterNumber.textContent).toBe("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const deincrementButton = screen.getByText("-");
  const counterNumber = screen.getByTestId("count");
  fireEvent.click(deincrementButton);
  expect(counterNumber.textContent).toBe("-1");
});
