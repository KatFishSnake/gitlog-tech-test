import { useState, lazy, Suspense } from "react";

import { CenteredLoader } from "./components/Loader";
import { mockOrg } from "./config";

const List = lazy(() => import("./containers/List"));
const Filter = lazy(() => import("./containers/Filter"));
const RemoteBranches = lazy(() => import("./containers/RemoteBranches"));
const LocalBranches = lazy(() => import("./containers/LocalBranches"));

function App() {
  const [query, setQuery] = useState("");
  return (
    <main className="flex w-full h-screen">
      <Suspense fallback={<CenteredLoader />}>
        <aside className="flex-none w-64 bg-m-gray h-screen bg-gray shadow-md hidden md:block border-r border-gray-400 px-6 py-4 overflow-auto">
          <h3 className="mb-8 font-black">{mockOrg}</h3>

          <LocalBranches />
          <RemoteBranches />
        </aside>

        <section className="flex flex-col w-full h-screen flex-1 overflow-hidden">
          <Filter
            onQuery={(val) => {
              setQuery(val);
            }}
          />

          <List query={query} />
        </section>
      </Suspense>
    </main>
  );
}

export default App;
