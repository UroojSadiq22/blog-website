export default {
    name: "blogPost", // Unique identifier for the schema
    type: "document", // Document type schema
    title: "Blog Post", // Displayed name in Sanity Studio
    fields: [
      {
        name: "title", // Field identifier
        type: "string", // Data type
        title: "Blog Title", // Display name
      },
      {
        name: "description",
        type: "text",
        title: "Blog Description",
      },
      {
        name: "datePosted",
        type: "datetime",
        title: "Date Posted",
      },
    ],
  };
  