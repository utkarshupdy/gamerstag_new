// import { BasketIcon } from "@sanity/icons";
import { RiShoppingBasketLine } from "react-icons/ri";
import { defineField, defineType } from "sanity";

export const featuresType = defineType({
  name: "features",
  title: "Features",
  type: "document",
  icon: RiShoppingBasketLine,
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) =>
        Rule.required().error("The name field is required."),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
      },
      validation: (Rule) =>
        Rule.required().error("The slug field is required."),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image/Wallpaper",
      options: {
        hotspot: true,
      },
      validation: (Rule) =>
        Rule.required().error("The image field is required."),
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
        Rule.required().error("The Launch Date field is required")
    }),
    defineField({
      name: "subFeatures",
      type: "array",
      title: "Sub Features",
      of: [
        {
          type: "reference",
          to: [{ type: "subFeatures" }],
        },
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) =>
        Rule.required().error("The description field is required."),
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      subtitle: "status",
    },
  },
});
