// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "caroussel",
  title: "Caroussel",
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
  ],

  preview: {
    select: {
      title: "nom",
      media: "images.0.asset",
    },
  },
};
