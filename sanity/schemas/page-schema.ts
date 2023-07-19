const page = {
  name: "table",
  title: "Tables",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "splitter",
      title: "Splitter",
      type: "string",
    },
    {
      name: "headers",
      title: "Headers",
      type: "string",
    },
    {
      name: "content",
      title: "Table Contents",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

export default page;
