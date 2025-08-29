import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders prediction header", () => {
  render(<App />);
  const linkElement = screen.getByText(/ML Model Prediction/i);
  expect(linkElement).toBeInTheDocument();
});
