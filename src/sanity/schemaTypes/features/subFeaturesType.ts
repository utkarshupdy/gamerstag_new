// import { TiersIcon } from "@sanity/icons";
import { RiStackLine } from "react-icons/ri";
import { defineArrayMember, defineField, defineType } from "sanity";

export const subFeaturesType = defineType({
  name: "subFeatures",
  title: "Sub-Features",
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
      name: "image",
      type: "image",
      title: "Cover Phone Image",
      options: {
        hotspot: true,
      },
      validation: (Rule) =>
        Rule.required().error("The image field is required."),
    }),
    defineField({
      name: "tutorialsScreens",
      title: "Tutorials Screens",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "note",
              title: "Note",
              type: "text",
              validation: (Rule) =>
                Rule.required().error("The note field is required."),
            }),
            defineField({
              name: "image",
              title: "Images",
              type: "image",
              validation: (Rule) =>
                Rule.required().error("The image field is required."),
            }),
          ],
          preview: {
            select: {
              title: "note",
              media: "image",
            },
          },
        }),
      ],
      description: "Add app screens with notes.",
      validation: (Rule) =>
        Rule.required().error("The app screen field is required."),
    }),
    defineField({
      name: "stakeHolders",
      type: "array",
      title: "Stake Holders",
      of: [
        {
          type: "reference",
          to: [{ type: "stakeHolders" }],
          preview: {
            select: {
              title: "stakeHolderName",
              media: "image",
            },
          },
        },
      ],
    }),
    defineField({
      name: "launchDate",
      type: "datetime",
      title: "Launch Date",
      options: {
        dateFormat: "DD-MM-YYYY",
        timeFormat: "HH:mm:ss",
      },
      validation: (Rule) =>
        Rule.required().error("The Launch Date field is required"),
    }),
    defineField({
      name: "playstoreLink",
      title: "Game Playstore Link",
      type: "url",
      validation: (Rule) =>
        Rule.required()
          .uri({
            scheme: ["http", "https"],
          })
          .error("The URL field is required."),
    }),
    defineField({
      name: "videoExplainLink",
      title: "Video Explainer Link",
      type: "url",
      validation: (Rule) =>
        Rule.required()
          .uri({
            scheme: ["http", "https"],
          })
          .error("The URL field is required."),
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "benefits",
      type: "array",
      title: "Benefits of this Feature",
      of: [{ type: "string" }],
      validation: (Rule) =>
        Rule.required().error("The role field is required."),
    }),
    defineField({
      name: "problemSolved",
      type: "array",
      title: "Problems this Feature Solve",
      of: [{ type: "string" }],
      validation: (Rule) =>
        Rule.required().error("The role field is required."),
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
