import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Filter from "../containers/Filter";

test("Renders Filter consistently", () => {
  const { container } = render(<Filter />);
  expect(container).toMatchSnapshot();
});

test("Correctly passes value to parent on query", () => {
  let expectedValue = "This is my query";
  let query = null;
  const { container, getByPlaceholderText, getByText } = render(
    <Filter
      onQuery={(val) => {
        query = val;
      }}
    />
  );

  const input = getByPlaceholderText("Filter by commit message…");

  userEvent.type(input, expectedValue);
  userEvent.click(getByText("Filter"));

  expect(query).toBe(expectedValue);
});

test("Correctly passes value to parent on clear, without triggering Filter button", () => {
  let expectedValue = "This is my query";
  let query = null;
  const { container, getByPlaceholderText } = render(
    <Filter
      onQuery={(val) => {
        query = val;
      }}
    />
  );

  const input = getByPlaceholderText("Filter by commit message…");

  userEvent.type(input, expectedValue);
  userEvent.clear(input);

  expect(query).toBe("");
});
