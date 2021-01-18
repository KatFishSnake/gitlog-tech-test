import { useMemo } from "react";
import PropTypes from "prop-types";
import { format, isYesterday, isToday } from "date-fns";
import styled from "styled-components";
import clsx from "clsx";

import GitGraph from "../components/GitGraph";
import Loader from "../components/Loader";
import useFetch from "../hooks/useFetch";
import { sizes } from "../style-vars";
import { graphColors, mockCommitList } from "../config";

const gridColumnTemplate =
  "1fr minmax(80px, 101px) minmax(80px, 109px) minmax(100px,194px)";

const StyledRow = styled.div`
  grid-template-columns: 1fr;

  @media ${sizes.md} {
    grid-template-columns: ${gridColumnTemplate};
  }
`;

const StyledHeadRow = styled.div`
  grid-template-columns: 4rem 1fr;

  @media ${sizes.md} {
    grid-template-columns: 4rem ${gridColumnTemplate};
  }
`;

const StyledGitGraph = styled(GitGraph)`
  margin-top: -0.095rem;
`;

const StyledHeaderCell = styled.div`
  padding-top: 5px;
  padding-bottom: 3px;
  border-color: #a9a9a9;
`;

const StyledTag = styled.span`
  ${({ refKey, tagColors }) =>
    tagColors[refKey] ? `background-color: ${tagColors[refKey]};` : ""}
  color: #00000087;
`;

const getTagColors = (list, colors) => {
  let colorCounter = 0;
  const branchToColorMap = {};

  [...list].reverse().forEach((item) => {
    item.refs.forEach((ref) => {
      if (ref.includes("tag: ") || ref.includes("HEAD")) return;
      const withoutOrigin = ref.replace("origin/", "");
      if (!branchToColorMap[withoutOrigin]) colorCounter++;
      branchToColorMap[withoutOrigin] = colors[colorCounter];
      branchToColorMap[`origin/${withoutOrigin}`] = colors[colorCounter];
      if (colorCounter === colors.length) colorCounter = 0;
    });
  });

  return branchToColorMap;
};

const getDate = (date) => {
  const timestamp = new Date(date);
  const today = isToday(timestamp);
  const yesterday = isYesterday(timestamp);
  const formattedMonth =
    (today && "Today") ||
    (yesterday && "Yesterday") ||
    format(timestamp, "MMM d, yyyy");
  return `${formattedMonth} at ${format(timestamp, "hh:mm a")}`;
};

const List = ({ query }) => {
  const queryMemoed = useMemo(() => ({ query }), [query]);
  const { loading, data: commitList } = useFetch(
    mockCommitList,
    queryMemoed,
    1000
  );
  const tagColors = useMemo(() => getTagColors(commitList, graphColors), [
    commitList,
  ]);

  return (
    <div className="flex text-xxs flex-wrap overflow-y-scroll overflow-x-hidden">
      <StyledHeadRow className="sticky top-0 grid grid-cols-4 w-full items-start">
        <StyledHeaderCell className="w-full sticky top-0 px-2 py-1 bg-d-gray flex-0 text-center shadow-inner">
          Graph
        </StyledHeaderCell>
        <StyledHeaderCell className="px-2 py-1 bg-d-gray border-l shadow-inner">
          Description
        </StyledHeaderCell>
        <StyledHeaderCell className="hidden md:block px-2 py-1 bg-d-gray border-l shadow-inner">
          Commit #
        </StyledHeaderCell>
        <StyledHeaderCell className="hidden md:block px-2 py-1 bg-d-gray border-l shadow-inner">
          Author
        </StyledHeaderCell>
        <StyledHeaderCell className="hidden md:block px-2 py-1 bg-d-gray border-l shadow-inner">
          Date
        </StyledHeaderCell>
      </StyledHeadRow>

      {loading ? (
        <Loader className="mt-3 text-center w-full" />
      ) : (
        <>
          <div className="w-16 flex-col flex">
            <div className="flex-1">
              <StyledGitGraph
                graphData={commitList}
                className={clsx(query && "hidden")}
              />
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <div>
              {commitList.map((item) => (
                <StyledRow className="grid grid-cols-4 w-full" key={item.hash}>
                  <div className="px-1 py-1 truncate" title={item.subject}>
                    {item.refs.map((ref) => (
                      <StyledTag
                        refKey={ref}
                        tagColors={tagColors}
                        className="bg-gray-200 rounded-2xl px-2 py-1 mr-1 text-xxxs"
                        key={ref}
                      >
                        {ref}
                      </StyledTag>
                    ))}
                    {item.subject}
                  </div>
                  <div
                    className="px-1 py-1 truncate hidden md:block"
                    title={item.hash}
                  >
                    {item.hash}
                  </div>
                  <div
                    className="px-1 py-1 truncate hidden md:block"
                    title={item.author.name}
                  >
                    {item.author.name}
                  </div>
                  <div className="px-1 py-1 truncate hidden md:block">
                    {getDate(item.author.timestamp)}
                  </div>
                </StyledRow>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

List.propTypes = {
  query: PropTypes.string,
};

export default List;
