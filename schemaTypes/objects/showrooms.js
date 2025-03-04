export default {
  name: "showrooms", // ✅ Renamed to avoid conflict
  title: "Showroom Item",
  type: "object",
  fields: [
    { name: "name", title: "Showroom Name", type: "string" },
    { name: "imageURL", title: "Image", type: "image", options: { hotspot: true } },
    { name: "url2", title: "Showroom URL", type: "url", validation: (Rule) => Rule.required() },
  ],
};
