// import { BasketIcon } from "@sanity/icons";
import { FaRegBell } from "react-icons/fa";
import { defineField, defineType } from "sanity";

export const homeHighlightsType = defineType({
  name: "homeHighlights",
  title: "Home Highlights",
  type: "document",
  icon: FaRegBell,
  fields: [
    defineField({
      name: "homeHighlightsName",
      type: "string",
      title: "Home Highlights Name",
      validation: (Rule) =>
        Rule.required().error("The name field is required."),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "homeHighlightsName",
      },
      validation: (Rule) =>
        Rule.required().error("The slug field is required."),
    }),
    defineField({
      name: "layout",
      title: "Layout",
      type: "string",
      options: {
        list: [
          { title: "Image Left, Content Right", value: "imageLeft" },
          { title: "Content Left, Image Right", value: "contentLeft" },
          { title: "Image Top, Content Bottom", value: "imageTop" },
        ],
        layout: "radio",
      },
      validation: (Rule) =>
        Rule.required().error("The layout field is required."),
      initialValue: "imageLeft"
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "reference", to: [{ type: "post" }, { type: "features" }, { type: "subFeatures" }] },
      ],
      validation: (Rule) =>
        Rule.required().min(1).max(1).error("Only one content item is allowed."),
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
      validation: (Rule) => Rule.max(2).warning("You can only add two buttons"),
    }),
    defineField({
      name: "buttonOrder",
      title: "Button Order",
      type: "string",
      options: {
        list: [
          { title: "First Button on Left", value: "firstLeft" },
          { title: "Second Button on Left", value: "secondLeft" },
        ],
        layout: "radio",
      },
      validation: (Rule) =>
        Rule.required().error("The button order field is required."),
      initialValue: "firstLeft"
    }),
  ],
  preview: {
    select: {
      title: "homeHighlightsName",
      media: "content.image",
      subtitle: "content.name",
    },
  },
});
