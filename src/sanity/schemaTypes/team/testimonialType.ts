// import { UsersIcon } from "@sanity/icons";
import { FiUsers } from "react-icons/fi";
import { defineArrayMember, defineField, defineType } from "sanity";

export const testimonialType = defineType({
  name: "testimonial",
  title: "Testimonial",
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
      name: "status",
      type: "string",
      title: "Status",
      options: {
        list: [
          { title: "Accepted", value: "accepted" },
          { title: "Rejected", value: "rejected" },
          { title: "Pending", value: "pending" },
        ],
        layout: "radio",
      },
      validation: (Rule) =>
        Rule.required().error("The status field is required."),
      initialValue: "pending",
    }),
    defineField({
      name: "type",
      type: "string",
      title: "Type",
      options: {
        list: [
          { title: "Pro", value: "pro" },
          { title: "Simple", value: "simple" },
          { title: "None", value: "none" },
        ],
        layout: "radio",
      },
      validation: (Rule) =>
        Rule.required().error("The type field is required."),
      initialValue: "none",
    }),
    defineField({
      name: "email",
      type: "email",
      validation: (Rule) =>
        Rule.required().error("The email field is required."),
    }),
    defineField({
      name: "gamersTagId",
      type: "string",
      title: "Gamers Tag ID",
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      description: "Rate between 1 and 5.",
      options: {
        list: [1, 2, 3, 4, 5],
      },
      validation: (Rule) =>
        Rule.required().min(1).max(5).error("Rating must be between 1 and 5."),
    }),
    defineField({
      name: "testimoniallink",
      title: "Testimonial Link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }).error("The URL must start with http:// or https://."),
    }),
    defineField({
      name: "sociallink",
      title: "Social Media Link(Your Instagram/Linkedin/Youtube)",
      type: "url",
      validation: (Rule) =>
        Rule.required()
          .uri({
            scheme: ["http", "https"],
          })
          .error("Your social media link field is required."),
    }),
    defineField({
      name: "featureSelection",
      title: "Feature Selection",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "mainFeature",
              title: "Feature",
              type: "string",
              validation: (Rule) =>
                Rule.required().error("Main Feature is required."),
            }),
            defineField({
              name: "subFeatures",
              title: "Sub Features",
              type: "array",
              of: [
                defineArrayMember({
                  type: "string",
                }),
              ],
              validation: (Rule) =>
                Rule.min(1).error("At least one Sub Feature is required."),
            }),
          ],
          preview: {
            select: {
              title: "mainFeature",
              subtitle: "subFeatures",
            },
            prepare(selection) {
              const { title, subtitle } = selection;
              return {
                title,
                subtitle: subtitle
                  ? `Sub Features: ${subtitle.join(", ")}`
                  : "No Sub Features",
              };
            },
          },
        }),
      ],
      validation: (Rule) =>
        Rule.required().min(1).error("At least one Main Feature is required."),
    }),
    defineField({
      name: "comment",
      title: "Comment",
      type: "text",
      validation: (Rule) =>
        Rule.required().error("The commet field is required"),
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
