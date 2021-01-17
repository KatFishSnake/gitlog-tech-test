import React from "react";
import { Gitgraph, templateExtend, TemplateName } from "@gitgraph/react";
import styled from "styled-components";

const GraphWrap = styled.div`
  // A way to remove annoying tooltips (not the best but works for now)
  pointer-events: none;

  foreignObject {
    display: none !important;
  }
`;

const withoutBranchLabels = templateExtend(TemplateName.Metro, {
  colors: ["#DF9FF7", "#96D0EC", "#EC9696", "#8AE798"],
  branch: { lineWidth: 2, spacing: 12, label: { display: false } },
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
          template: withoutBranchLabels,
        }}
      >
        {(gitgraph) => {
          gitgraph.import(graphData);
        }}
      </Gitgraph>
    </GraphWrap>
  );
};

export default GitGraph;
