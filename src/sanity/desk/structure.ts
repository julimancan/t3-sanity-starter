// import type { StructureBuilder } from 'sanity/src/desk/structureBuilder/types';
import { siteSettings } from "../schemas/documents/siteSettings";
import { homepage } from "../schemas/pages/homepage";
import { BookIcon, HomeIcon } from "@sanity/icons"
// import { StructureBuilder } from 'sanity/desk/typeStructureBuilder';
import type { StructureBuilder } from 'sanity/desk';

export const structure = (S: StructureBuilder) => {
  const siteSettingsListItem = S.listItem()
    .title(siteSettings.name)
    .icon(siteSettings.icon)
    .child(
      S.document()
        .documentId(siteSettings.name)
        .schemaType(siteSettings.name)
    );

  const homepageItem = S.listItem()
    .title("homepage")
    .icon(HomeIcon)
    .child(
      S.document()
        .schemaType(homepage.name)
        .documentId(homepage.name)
    );
  const pages = S.listItem()
    .title("Pages")
    .icon(BookIcon)
    .child(
      S.list()

        .title("Pages")
        .items([homepageItem])
    );

  return S.list()
    .title("Content")
    .items([
      siteSettingsListItem,
      S.divider(),
      pages,
      S.divider(),
      ...S.documentTypeListItems().filter(
        item => item.getId() !== siteSettings.name && item.getId() !== homepage.name
      ),
    ]);
};
