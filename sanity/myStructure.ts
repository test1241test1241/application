// @ts-nocheck

export const myStructure = (S) =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Settings")
        .child(S.document().schemaType("settings").documentId("settings")),
      ...S.documentTypeListItems().filter(
        (listItem) => !["settings"].includes(listItem.getId())
      ),
    ]);
