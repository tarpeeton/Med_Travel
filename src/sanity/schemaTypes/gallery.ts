import { defineType } from 'sanity';

export default defineType({
  name: 'tourPhotos', // Unique name for the schema
  title: 'Фотографии туров', // Displayed title in the Sanity studio
  type: 'document', // This defines it as a content type
  fields: [
    {
      name: 'photo',
      title: 'Фото',
      type: 'image', // Field type for uploading images
      options: {
        hotspot: true, // Enable cropping and focal point selection
      },
      validation: (Rule) => Rule.required(), // Ensure the image is required
    },
  ],
});
