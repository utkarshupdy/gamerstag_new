// import { TiersIcon } from "@sanity/icons";
import { RiStackLine } from "react-icons/ri";
import { defineField, defineType } from "sanity";

export const temporaryFeatureType = defineType({
  name: "temporaryFeature",
  title: "Temporary Feature",
  type: "document",
  icon: RiStackLine,
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("The name field is required."),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) =>
        Rule.required().error("The slug field is required."),
    }),

    defineField({
      name: "featureLink",
      title: "Feature Link",
      type: "url",
      validation: (Rule) =>
        Rule.required()
          .uri({
            scheme: ["http", "https"],
          })
          .error("The URL field is required."),
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
