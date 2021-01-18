import mockedHistoryShort from "./mockedHistoryShort.json";
// import mockedHistoryLong from "./mockedHistoryLong.json";

export const graphColors = ["#DF9FF7", "#96D0EC", "#EC9696", "#8AE798"];

export const mockOrg = "organization/repository";

export const mockLocal = [
  { id: 1, label: "dev" },
  { id: 2, label: "master" },
  { id: 3, label: "feature/test1" },
  { id: 4, label: "feature/test2" },
];

export const mockRemote = [
  {
    id: 1,
    label: "origin",
    branches: [
      { id: 1, label: "dev" },
      { id: 2, label: "master" },
      { id: 3, label: "feature/test1" },
      { id: 4, label: "feature/test2" },
      { id: 5, label: "bug/1023-fixes-issue" },
      { id: 6, label: "bug/1024-fixes-issue" },
      { id: 7, label: "bug/1424-fixes-issue" },
    ],
  },
];

export const mockCommitList = mockedHistoryShort;
