import { defineField, defineType } from "sanity";


export const homepage = defineType({
  title: "Homepage",
  name: "homepage",
  type: "document",
  groups: [
    {
      name: "content",
      title: "Content",
    }
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
    }),
  ],
});
