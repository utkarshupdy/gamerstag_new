import { defineField, defineType } from "sanity";
// import { CommentIcon } from "@sanity/icons";
import { FaRegCommentAlt } from "react-icons/fa";

export const commentType = defineType({
  name: "comment",
  title: "Comment",
  type: "document",
  icon: FaRegCommentAlt,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "post",
      title: "Post",
      type: "reference",
      to: { type: "post" },
    }),
    // defineField({
    //   name: 'date',
    //   title: 'Date',
    //   type: 'datetime',
    //   initialValue: () => new Date().toISOString(), // Default value as current date and time
    // }),
  ],
});
