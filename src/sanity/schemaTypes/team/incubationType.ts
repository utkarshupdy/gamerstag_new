// import { BulbOutlineIcon } from "@sanity/icons";
import { FaRegLightbulb } from "react-icons/fa";
import { defineField, defineType } from "sanity";

export const incubationType = defineType({
  name: "incubation",
  title: "Incubation",
  type: "document",
  icon: FaRegLightbulb,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("The title field is required."),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) =>
        Rule.required().error("The slug field is required."),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Incubator Image",
      options: {
        hotspot: true,
      },
      validation: (Rule) =>
        Rule.required().error("The image field is required."),
    }),
    defineField({
      name: "logo",
      type: "image",
      title: "Incubator Logo",
      options: {
        hotspot: true,
      },
      validation: (Rule) =>
        Rule.required().error("The logo field is required."),
    }),
    defineField({
      name: "link",
      type: "url",
      title: "Incubator Link",
      validation: (Rule) =>
        Rule.required()
          .uri({ scheme: ["http", "https"] })
          .error("Please provide a valid URL for the incubator."),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "logo",
    },
  },
});
