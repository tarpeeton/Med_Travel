import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'partner',
  type: 'document',
  title: 'Партнеры',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Имя партнера',
      validation: (Rule) => Rule.required().error('Имя партнера обязательно'),
    }),
    defineField({
      name: 'photo',
      type: 'image',
      title: 'Фотография',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Фотография обязательна'),
    }),
  ],
});
