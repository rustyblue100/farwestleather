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
  ],

  preview: {
    select: {
      media: "images.0.asset",
    },
  },
};
