// import { ConfettiIcon } from "@sanity/icons";
import { PiConfetti } from "react-icons/pi";
import { defineField, defineType } from "sanity";

export const stakeHoldersType = defineType({
  name: "stakeHolders",
  title: "Stake Holders",
  type: "document",
  icon: PiConfetti,
  fields: [
    defineField({
      name: "stakeHolderName",
      title: "Stake Holder Name",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("The name field is required."),
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
      name: "stakeHolderTitle",
      title: "Stake Holder Title",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("The title field is required."),
    }),
    defineField({
      name: "stakeHolderNickName",
      title: "Stake Holder NickName",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("The nickname field is required."),
    }),
    defineField({
      name: "image",
      title: "Images",
      type: "image",
      validation: (Rule) =>
        Rule.required().error("The image field is required."),
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      validation: (Rule) =>
        Rule.required().error("The quote field is required."),
    }),
    defineField({
      name: "subHeader",
      title: "Sub-Header",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("The sub-header field is required."),
    }),
    defineField({
      name: "features",
      type: "array",
      title: "Features",
      of: [
        {
          type: "reference",
          to: [{ type: "features" }],
        },
      ],
      validation: (Rule) =>
        Rule.required()
          .max(8)
          .warning("You can only add 8 features")
          .error("The feature field is required"),
    }),
    defineField({
      name: "buttons",
      title: "Buttons",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "text",
              title: "Button Text",
              type: "string",
            },
            {
              name: "action",
              title: "Button Action",
              type: "url",
            },
          ],
        },
      ],
      validation: (Rule) =>
        Rule.required()
          .max(2)
          .warning("You can only add two buttons")
          .error("The Button field is required"),
    }),
  ],
  preview: {
    select: {
      title: "stakeHolderName",
      media: "image",
    },
  },
});
