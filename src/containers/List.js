import { useMemo } from "react";
import PropTypes from "prop-types";
import { format, isYesterday, isToday } from "date-fns";
import tw from "twin.macro";
import styled from "styled-components";
import clsx from "clsx";

import GitGraph from "../components/GitGraph";
import { CenteredLoader } from "../components/Loader";
import useFetch from "../hooks/useFetch";
import { sizes } from "../style-vars";
import { graphColors, mockCommitList } from "../config";

const gridColumnTemplate =
  "1fr minmax(80px, 101px) minmax(80px, 109px) minmax(100px,194px)";

const StyledRow = styled.div`
  ${tw`grid grid-cols-4 w-full`}
  grid-template-columns: 1fr;

  @media ${sizes.md} {
    grid-template-columns: ${gridColumnTemplate};
  }

  & > div {
    ${tw`px-1 py-1 truncate`}
  }
`;

const StyledHeadRow = styled.div`
  ${tw`sticky top-0 grid grid-cols-4 w-full items-start`}
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

  ${tw`px-2 py-1 bg-d-gray shadow-inner`}
`;

const StyledTag = styled.span`
  ${tw`bg-gray-200 rounded-2xl px-2 py-1 mr-1 text-xxxs`}
  ${({ refKey, tagColors }) =>
    tagColors[refKey]
      ? `background-color: ${tagColors[refKey]};`
      : ""}
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
      <StyledHeadRow>
        <StyledHeaderCell className="text-center">Graph</StyledHeaderCell>
        <StyledHeaderCell className="border-l">Description</StyledHeaderCell>
        <StyledHeaderCell className="hidden md:block border-l">
          Commit #
        </StyledHeaderCell>
        <StyledHeaderCell className="hidden md:block border-l">
          Author
        </StyledHeaderCell>
        <StyledHeaderCell className="hidden md:block border-l">
          Date
        </StyledHeaderCell>
      </StyledHeadRow>

      {loading ? (
        <CenteredLoader />
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
                <StyledRow key={item.hash}>
                  <div title={item.subject}>
                    {item.refs.map((ref) => (
                      <StyledTag refKey={ref} tagColors={tagColors} key={ref}>
                        {ref}
                      </StyledTag>
                    ))}
                    {item.subject}
                  </div>
                  <div className="hidden md:block" title={item.hash}>
                    {item.hash}
                  </div>
                  <div className="hidden md:block" title={item.author.name}>
                    {item.author.name}
                  </div>
                  <div className="hidden md:block">
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
