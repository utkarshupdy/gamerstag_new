// import { UserIcon } from "@sanity/icons";
import { FaRegUser } from "react-icons/fa";
import { defineArrayMember, defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: FaRegUser,
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
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "linkedinLink",
      title: "Linkedin",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }).error("The URL must start with http:// or https://."),
    }),
    defineField({
      name: "bio",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
