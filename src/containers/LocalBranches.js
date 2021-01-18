import { useState } from "react";

import useFetch from "../hooks/useFetch";
import { mockLocal } from "../config";
import NavItem from "../components/NavItem";
import { StyledNavHeader } from "../components/styled";
import Loader from "../components/Loader";

const LocalBranches = () => {
  const [active, setActive] = useState(null);
  const { loading, data: localBranches } = useFetch(mockLocal);

  return (
    <div className="flex flex-col mb-4">
      <StyledNavHeader className="mb-4 text-xxs not-italic font-bold leading-3 tracking-normal text-left">
        LOCAL BRANCHES
      </StyledNavHeader>
      <div className="text-xs">
        {loading ? (
          <Loader />
        ) : (
          localBranches.map((item) => (
            <NavItem
              key={item.id}
              label={item.label}
              active={item.id === active}
              onClick={() => {
                setActive(item.id);
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default LocalBranches;
