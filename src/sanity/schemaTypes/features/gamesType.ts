// import { JoystickIcon } from "@sanity/icons";
import { BiJoystick } from "react-icons/bi";
import { defineField, defineType } from "sanity";

export const gamesType = defineType({
  name: "games",
  title: "Games",
  type: "document",
  icon: BiJoystick,
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Game Name",
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
      name: "publisherName",
      type: "string",
      title: "Game Publisher Name",
      validation: (Rule) =>
        Rule.required().error("The name field is required."),
    }),
    defineField({
      name: "gamerDescription",
      title: "Game Description",
      type: "text",
      validation: (Rule) =>
        Rule.required().error("The description field is required."),
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
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      subtitle: "status",
    },
  },
});
