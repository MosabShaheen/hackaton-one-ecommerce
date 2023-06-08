import { defineType, defineField } from "sanity";

export default defineType({
  name: "products",
  type: "document",
  title: "Products",
  fields: [
    defineField({
      title: "Image",
      name: "img",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      type: "string",
      title: "Product Name",
    }),
    defineField({
      name: "price",
      type: "number",
      title: "Price",
    }),
    defineField({
      title: "Categories",
      name: "categories",
      type: "string",
      options: {
        list: [
          { title: "Men", value: "men" },
          { title: "Women", value: "women" },
          { title: "Kids", value: "kids" },
        ],
      },
    }),
    defineField({
      title: "Type",
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Sweater", value: "Sweater" },
          { title: "Dress", value: "Dress" },
          { title: "Pants", value: "Pants" },
          { title: "Jackets", value: "Jackets" },
          { title: "T shirts", value: "T shirts" },
        ],
      },
    }),
    defineField({
      name: "details",
      type: "string",
      title: "Product Details",
    }),
    defineField({
      name: "care",
      type: "string",
      title: "Product Care",
    }),
  ],
});
