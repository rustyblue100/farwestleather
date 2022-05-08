// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "a-propos",
  title: "À propos",
  type: "document",
  fields: [
    {
      name: "titre",
      title: "Titre",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
  ],

  preview: {
    select: {
      title: "titre",
    },
  },
};
