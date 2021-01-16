import { useState, useEffect } from "react";
import { Gitgraph, Mode } from "@gitgraph/react";
import { format, isYesterday, isToday } from "date-fns";

import { mockCommitList } from "../mockData";

const getDate = (date) => {
  const timestamp = new Date(date);
  const today = isToday(timestamp);
  const yesterday = isYesterday(timestamp);
  return `${format(
    timestamp,
    `${(today && "Today") || (yesterday && "Yesterday") || "MMM d, yyyy"}`
  )} at ${format(timestamp, "hh:mm a")}`;
};

const List = ({ query }) => {
  const [commitList, setCommitList] = useState([]);

  useEffect(() => {
    console.info(`Filtering by query ${query}`);
    setCommitList(mockCommitList);
  }, [query]);

  return (
    <div className="flex flex-row flex-grow overflow-auto">
      <div className="w-16 flex-col hidden sm:flex flex-none">
        <div className="w-full sticky top-0 px-1 py-3 text-red-900 bg-red-300 flex-0">
          Graph
        </div>
        <div className="bg-red-200 flex-1">graph</div>
      </div>

      <div className="flex flex-col w-full flex-1">
        <div className="sticky top-0 flex-1 flex flex-row">
          <div className=" px-1 py-3 text-red-900 bg-red-300">Description</div>
          <div className=" px-1 py-3 text-red-900 bg-red-300">Commit #</div>
          <div className=" px-1 py-3 text-red-900 bg-red-300">Author</div>
          <div className=" px-1 py-3 text-red-900 bg-red-300">Date</div>
        </div>

        <div className="overflow-auto">
          {commitList.map((item) => (
            <div className="flex flex-row w-full" key={item.hash}>
              <div className="px-1 py-4 truncate">{item.subject}</div>
              <div className="px-1 py-4 truncate">{item.hash}</div>
              <div className="px-1 py-4 truncate">{item.author.name}</div>
              <div className="px-1 py-4 truncate">
                {getDate(item.author.timestamp)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
