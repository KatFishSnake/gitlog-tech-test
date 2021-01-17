import { useState } from "react";

import "./App.css";
import LocalBranches from "./components/LocalBranches";
import RemoteBranches from "./components/RemoteBranches";
import Filter from "./components/Filter";
import List from "./components/List";

import { mockOrg } from "./mockData";

function App() {
  const [query, setQuery] = useState("");
  return (
    <main className="flex w-full h-screen">
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
    </main>
  );
}

export default App;
