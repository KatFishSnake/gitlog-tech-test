import { useMemo } from "react";
import { format, isYesterday, isToday } from "date-fns";
import styled from "styled-components";
import clsx from "clsx";

import GitGraph from "./GitGraph";
import useFetch from "../hooks/useFetch";
import { mockCommitList } from "../mockData";
import { sizes } from "../style-vars";

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

const StyledHeaderCell = styled.div`
  padding-top: 5px;
  padding-bottom: 3px;
  border-color: #a9a9a9;
`;

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

  return (
    <div className="flex text-xxs flex-wrap overflow-y-scroll overflow-x-hidden">
      <StyledHeadRow className="sticky top-0 grid grid-cols-4 w-full items-start">
        <StyledHeaderCell className="w-full sticky top-0 px-2 py-1 bg-d-gray flex-0 text-center">
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
        <div className="mt-3 text-center w-full">Loading...</div>
      ) : (
        <>
          <div className="w-16 flex-col flex">
            {/* TODO: REMOVE */}
            <div className="flex-1" style={{ marginTop: "-0.095rem" }}>
              <GitGraph
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
                      <span
                        className="bg-gray-300 rounded-2xl px-2 py-1 mr-1 text-xxxs"
                        key={ref}
                      >
                        {ref}
                      </span>
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

export default List;
