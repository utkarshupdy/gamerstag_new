import { GrDocumentText } from "react-icons/gr";
import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: GrDocumentText,
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
      name: "author",
      type: "reference",
      to: { type: "author" },
      validation: (Rule) =>
        Rule.required().error("The author field is required."),
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
      validation: (Rule) =>
        Rule.required().error("The main image field is required."),
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
      validation: (Rule) =>
        Rule.required().error("The category field is required."),
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      options: {
        dateFormat: "DD-MM-YYYY",
      },
      validation: (Rule) =>
        Rule.required().error("The publish date field is required."),
    }),
    defineField({
      name: "body",
      type: "blockContent",
      validation: (Rule) =>
        Rule.required().error("The body field is required."),
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
