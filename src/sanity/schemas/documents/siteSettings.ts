import { defineType } from "sanity";

import { seo } from "../objects/seo";
import { CogIcon } from "@sanity/icons";

export const siteSettings = defineType({
  title: "Site Settings",
  name: "siteSettings",
  type: "document",
  icon: CogIcon,
  groups: [{ title: "SEO", name: "SEO" }],
  fields: [
    seo,
  ],
});
