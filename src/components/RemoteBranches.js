import { useState } from "react";
import styled from "styled-components";

import useFetch from "../hooks/useFetch";
import { mockRemote } from "../mockData";
import OriginDropdown from "./OriginDropdown";
import NavBranch from "./NavBranch";

const StyledNavHeader = styled.h4`
  color: #81858b;
`;

const RemoteBranches = () => {
  const [active, setActive] = useState(null);
  const { loading, data: origins } = useFetch(mockRemote);

  return (
    <div className="flex flex-col">
      <StyledNavHeader className="mb-4 text-xxs not-italic font-bold leading-3 tracking-normal text-left">
        REMOTE BRANCHES
      </StyledNavHeader>
      <div className="text-xs mb-4">
        {loading
          ? "Loading..."
          : origins.map((item) => (
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
