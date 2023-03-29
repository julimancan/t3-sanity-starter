import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";
import { env } from "../env.mjs";
import { structure } from "./desk/structure";

const singletonTypes = new Set(["siteSettings", "homepage"]);

const singletonActions = new Set(["publish", "discardChanges", "restore"]);

export default defineConfig({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  name: "eunicorn-studios",
  basePath: "/admin",
  plugins: [deskTool({ structure })],
  schema: {
    types: schemaTypes,

    // templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType))
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
