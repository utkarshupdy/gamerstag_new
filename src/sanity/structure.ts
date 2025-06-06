import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Studio")
    .items([
      // Blog Section
      S.listItem()
        .title("Blog")
        .child(
          S.list()
            .title("Blog Management")
            .items([
              S.documentTypeListItem("post").title("Posts"),
              S.documentTypeListItem("category").title("Categories"),
              S.documentTypeListItem("author").title("Authors"),
              S.documentTypeListItem("comment").title("Comments"),
            ]),
        ),

      // Feature Section
      S.listItem()
        .title("Feature")
        .child(
          S.list()
            .title("Feature Management")
            .items([
              S.documentTypeListItem("features").title("Features"),
              S.documentTypeListItem("subFeatures").title("Sub-Features"),
              S.documentTypeListItem("temporaryFeature").title("Temporary Feature"),
              S.documentTypeListItem("stakeHolders").title("Stake Holders"),
              S.documentTypeListItem("games").title("Games"),
            ]),
        ),

      // Team Section
      S.listItem()
        .title("Team")
        .child(
          S.list()
            .title("Team Management")
            .items([
              S.documentTypeListItem("mentors").title("Mentors"),
              S.documentTypeListItem("members").title("Members"),
              S.documentTypeListItem("testimonial").title("Testimonial"),
              S.documentTypeListItem("incubation").title("Incubation"),
            ]),
        ),

      S.listItem()
        .title("Content")
        .child(
          S.list()
            .title("Content Management")
            .items([
              S.documentTypeListItem("homeHighlights").title("Home Highlights"),
              S.documentTypeListItem("gallery").title("Gallery"),
            ]),
        ),
    ]);
