// import { UsersIcon } from "@sanity/icons";
import { FiUsers } from "react-icons/fi";
import { defineArrayMember, defineField, defineType } from "sanity";

export const membersType = defineType({
  name: "members",
  title: "Members",
  type: "document",
  icon: FiUsers,
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
      name: "role",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("The role field is required."),
    }),
    defineField({
      name: "headline",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("The headline field is required."),
    }),
    defineField({
      name: "education",
      type: "string",
      title: "Education-Course/University",
      validation: (Rule) =>
        Rule.required().error("The education field is required."),
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [
        defineArrayMember({
          type: "string",
        }),
      ],
      description: "Add area of expertise for member",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .error(
            "The skills field is required and must contain at least one skill.",
          ),
    }),
    defineField({
      name: "socialMedia",
      title: "Social Media",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "GitHub", value: "github" },
                  { title: "Twitter", value: "twitter" },
                  { title: "Facebook", value: "facebook" },
                  { title: "Instagram", value: "instagram" },
                ],
              },
              validation: (Rule) =>
                Rule.required().error("The platform field is required."),
            }),
            defineField({
              name: "url",
              title: "URL",
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
              title: "platform",
            },
            prepare({ title }) {
              return {
                title: title.charAt(0).toUpperCase() + title.slice(1),
              };
            },
          },
        }),
      ],
      description: "Add social media links for the member.",
      validation: (Rule) =>
        Rule.required().error("The social media field is required."),
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Image of the member",
      validation: (Rule) =>
        Rule.required().error("The image field is required."),
    }),
    defineField({
      name: "gallery",
      type: "array",
      title: "Image Gallery",
      of: [
        {
          type: "reference",
          to: [{ type: "gallery" }],
        },
      ],
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
    }),
    defineField({
      name: "capabilities",
      type: "text",
    }),
    defineField({
      name: "comments",
      title: "Comments",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "comment",
              title: "Comment",
              type: "text",
              validation: (Rule) =>
                Rule.required().error("The comment field is required."),
            }),
          ],
          preview: {
            select: {
              title: "comment",
            },
          },
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
