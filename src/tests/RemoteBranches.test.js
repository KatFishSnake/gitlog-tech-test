import { render } from "@testing-library/react";

import RemoteBranches from "../containers/RemoteBranches";

test("Renders RemoteBranches consistently", () => {
  const { container } = render(<RemoteBranches />);
  expect(container).toMatchSnapshot();
});
