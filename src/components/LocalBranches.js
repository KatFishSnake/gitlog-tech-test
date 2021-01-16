import { useState, useEffect } from "react";

import { mockLocal } from "../mockData";
import NavBranch from "./NavBranch";

const LocalBranches = () => {
  const [active, setActive] = useState(null);
  const [localBranches, setLocalBranches] = useState([]);

  useEffect(() => {
    setLocalBranches(mockLocal);
  }, []);

  return (
    <div className="flex flex-col mb-4">
      <h4 className="mb-4 text-xs not-italic font-bold leading-3 tracking-normal text-left text-gray-600">
        LOCAL BRANCHES
      </h4>
      <div className="text-xs">
        {localBranches.map((item) => (
          <NavBranch
            key={item.id}
            label={item.label}
            active={item.id === active}
            onClick={() => {
              setActive(item.id);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LocalBranches;
