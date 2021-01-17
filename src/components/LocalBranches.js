import { useState } from "react";
import styled from "styled-components";

import useFetch from "../hooks/useFetch";
import { mockLocal } from "../mockData";
import NavBranch from "./NavBranch";

export const StyledNavHeader = styled.h4`
  color: #81858b;
`;

const LocalBranches = () => {
  const [active, setActive] = useState(null);
  const { loading, data: localBranches } = useFetch(mockLocal);

  return (
    <div className="flex flex-col mb-4">
      <StyledNavHeader className="mb-4 text-xxs not-italic font-bold leading-3 tracking-normal text-left">
        LOCAL BRANCHES
      </StyledNavHeader>
      <div className="text-xs">
        {loading
          ? "Loading..."
          : localBranches.map((item) => (
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
