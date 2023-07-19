// import { ArrayDefinition } from "sanity";

export type TableInterface = {
  _id: string;
  title: string;
  headers: string;
  splitter: string;
  content: Array<string>;
};

export type SettingsInterface = {
  _id: string;
  title: string;
  description: string;
};
