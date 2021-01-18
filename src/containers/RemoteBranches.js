import { useState } from "react";

import useFetch from "../hooks/useFetch";
import { mockRemote } from "../config";
import OriginDropdown from "../components/OriginDropdown";
import NavItem from "../components/NavItem";
import { StyledNavHeader } from "../components/styled";
import Loader from "../components/Loader";

const RemoteBranches = () => {
  const [active, setActive] = useState(null);
  const { loading, data: origins } = useFetch(mockRemote);

  return (
    <div className="flex flex-col">
      <StyledNavHeader className="mb-4 text-xxs not-italic font-bold leading-3 tracking-normal text-left">
        REMOTE BRANCHES
      </StyledNavHeader>
      <div className="text-xs mb-4">
        {loading ? (
          <Loader />
        ) : (
          origins.map((item) => (
            <OriginDropdown key={item.id} label={item.label}>
              {item.branches.map((inner) => (
                <NavItem
                  key={inner.id}
                  label={inner.label}
                  active={inner.id === active}
                  onClick={() => {
                    setActive(inner.id);
                  }}
                />
              ))}
            </OriginDropdown>
          ))
        )}
      </div>
    </div>
  );
};

export default RemoteBranches;
