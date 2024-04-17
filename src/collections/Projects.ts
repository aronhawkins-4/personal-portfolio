import { CollectionConfig } from "payload/types";

const Projects: CollectionConfig = {
  slug: "projects",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "link",
      type: "text",
    },
    {
      name: "featured_image",
      type: "upload",
      relationTo: "media",
      required: false,
    },
    {
      name: "order",
      type: "number",
      required: false,
    },
  ],
};

export default Projects;
