// import { ImagesIcon } from "@sanity/icons";
import { FaRegImages } from "react-icons/fa";
import { defineArrayMember, defineField, defineType } from "sanity";

export const galleryType = defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  icon: FaRegImages,
  fields: [
    defineField({
      name: "title",
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
      name: "images",
      title: "Images",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
              description: "Link associated with this image.",
              validation: (Rule) =>
                Rule.required()
                  .uri({
                    scheme: ["http", "https"],
                  })
                  .error("A valid URL is required."),
            }),
          ],
          preview: {
            select: {
              title: "url",
              media: "image",
            },
          },
        }),
      ],
      validation: (Rule) =>
        Rule.required().min(1).error("At least one image is required."),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "images.0.image",
    },
  },
});
