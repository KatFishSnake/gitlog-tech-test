import React from "react";
import PropTypes from "prop-types";
import { Gitgraph, templateExtend, TemplateName } from "@gitgraph/react";
import styled from "styled-components";

import { graphColors } from "../config";

const GraphWrap = styled.div`
  // A way to remove annoying tooltips (again can be improved)
  pointer-events: none;

  // A way to remove strange non message labels (again can be improved)
  foreignObject {
    display: none !important;
  }
`;

const minimalisticTemplate = templateExtend(TemplateName.Metro, {
  colors: graphColors,
  branch: {
    lineWidth: 2,
    spacing: 12,
    label: { display: false },
  },
  commit: {
    message: { displayAuthor: false, displayHash: false, color: "transparent" },
    spacing: 24,
    dot: {
      size: 4,
      strokeWidth: 2,
    },
  },
  tag: {
    color: "transparent",
    strokeColor: "transparent",
    bgColor: "transparent",
  },
});

const GitGraph = ({ className, graphData }) => {
  return (
    <GraphWrap className={className}>
      <Gitgraph
        options={{
          template: minimalisticTemplate,
        }}
      >
        {(gitgraph) => {
          gitgraph.import(graphData);
        }}
      </Gitgraph>
    </GraphWrap>
  );
};

GitGraph.propTypes = {
  className: PropTypes.string,
  graphData: PropTypes.array,
};

export default GitGraph;
