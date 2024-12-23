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
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true, // Enables cropping and focal point selection
        },
      },
      {
        name: "comments",
        type: "array",
        title: "Comments",
        of: [
          {
            type: "object",
            title: "Comment",
            fields: [
              {
                name: "name",
                type: "string",
                title: "Name",
              },
              {
                name: "message",
                type: "text",
                title: "Message",
              },
              {
                name: "date",
                type: "datetime",
                title: "Date",
                options: { default: new Date().toISOString() },
              },
            ],
          },
        ],
      },
    ],
  };
  