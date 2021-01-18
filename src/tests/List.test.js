import { render } from "@testing-library/react";

import List from "../containers/List";

test("Renders List consistently", () => {
  const { container } = render(<List />);
  expect(container).toMatchSnapshot();
});
