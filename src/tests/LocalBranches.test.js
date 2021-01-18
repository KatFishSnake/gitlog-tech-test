import { render } from "@testing-library/react";

import LocalBranches from "../containers/LocalBranches";

test("Renders LocalBranches consistently", () => {
  const { container } = render(<LocalBranches />);
  expect(container).toMatchSnapshot();
});
