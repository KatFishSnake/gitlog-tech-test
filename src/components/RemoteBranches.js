import { useState, useEffect } from "react";

import { mockRemote } from "../mockData";
import OriginDropdown from "./OriginDropdown";
import NavBranch from "./NavBranch";

const RemoteBranches = () => {
  const [active, setActive] = useState(null);
  const [origins, setOrigins] = useState([]);

  useEffect(() => {
    setOrigins(mockRemote);
  }, []);

  return (
    <div className="flex flex-col mb-4">
      <h4 className="mb-4 text-xs not-italic font-bold leading-3 tracking-normal text-left text-gray-600">
        REMOTE BRANCHES
      </h4>
      <div className="text-xs">
        {origins.map((item) => (
          <OriginDropdown label={item.label} key={item.id}>
            {item.branches.map((inner) => (
              <NavBranch
                key={inner.id}
                label={inner.label}
                active={inner.id === active}
                onClick={() => {
                  setActive(inner.id);
                }}
              />
            ))}
          </OriginDropdown>
        ))}
      </div>
    </div>
  );
};

export default RemoteBranches;
