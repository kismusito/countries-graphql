import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import { Loading } from "./";

test("render content", () => {
  const { container } = render(<Loading />);

  expect(container).toHaveTextContent("Loading data...");
});
