import { defineType } from 'sanity';

export default defineType({
  name: 'review',
  type: 'document',
  title: 'Отзывы',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Имя',
      validation: (Rule) => Rule.required().error('Имя обязательно'),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Изображение',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'comment',
      type: 'object',
      title: 'Комментарий',
      fields: [
        { name: 'ru', type: 'text', title: 'Комментарий на русском' },
        { name: 'uz', type: 'text', title: 'Комментарий на узбекском' },
        { name: 'en', type: 'text', title: 'Комментарий на английском' },
      ],
      validation: (Rule) => Rule.required().error('Комментарий обязателен'),
    },
    {
      name: 'createdAt',
      type: 'datetime',
      title: 'Дата создания',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    },
  ],
});
