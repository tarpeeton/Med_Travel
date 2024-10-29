import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'teamMember',
  type: 'document',
  title: 'Наша команда',
  fields: [
    defineField({
      name: 'name',
      type: 'object',
      title: 'Имя и фамилия',
      fields: [
        {
          name: 'ru',
          type: 'string',
          title: 'Имя на русском',
        },
        {
          name: 'uz',
          type: 'string',
          title: 'Имя на узбекском',
        },
        {
          name: 'en',
          type: 'string',
          title: 'Имя на английском',
        },
      ],
      validation: (Rule) =>
        Rule.custom((name) => {
          if (name && (name.ru || name.uz || name.en)) {
            return true;
          }
          return 'Имя обязательно хотя бы на одном языке';
        }),
    }),
    defineField({
      name: 'occupation',
      type: 'object',
      title: 'Должность',
      fields: [
        {
          name: 'ru',
          type: 'string',
          title: 'Должность на русском',
        },
        {
          name: 'uz',
          type: 'string',
          title: 'Должность на узбекском',
        },
        {
          name: 'en',
          type: 'string',
          title: 'Должность на английском',
        },
      ],
      validation: (Rule) =>
        Rule.custom((occupation) => {
          if (occupation && (occupation.ru || occupation.uz || occupation.en)) {
            return true;
          }
          return 'Должность обязательно хотя бы на одном языке';
        }),
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
