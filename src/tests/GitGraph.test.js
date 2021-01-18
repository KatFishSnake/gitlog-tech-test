import { render } from "@testing-library/react";

import mockedHistoryShort from "../mockedHistoryShort.json";
import GitGraph from "../components/GitGraph";

test("Renders GitGraph consistently", () => {
  const { container } = render(<GitGraph graphData={mockedHistoryShort} />);
  expect(container).toMatchSnapshot();
});
