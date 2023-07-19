import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import config from "./sanity/config/client-config";
// import { myStructure } from "./sanity/myStructure";

export default defineConfig({
  ...config,

  title: "This is Title :)",

  basePath: "/admin",

  plugins: [deskTool(/*{ structure: myStructure }*/)],

  schema: { types: schemas },
});
