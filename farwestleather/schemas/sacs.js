// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "sacs",
  title: "Sacs",
  type: "document",
  fields: [
    {
      name: "images",
      type: "array", // supports drag'n'drop of multiple files
      options: {
        layout: "grid",
      },
      of: [
        {
          type: "image",
        },
      ],
    },
    {
      name: "nom",
      title: "Nom",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "nom",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "prix",
      title: "Prix à partir de",
      type: "number",
    },
    {
      name: "credit",
      title: "Crédit Photos",
      type: "string",
    },
  ],

  preview: {
    select: {
      title: "nom",
      media: "images.0.asset",
    },
  },
};
