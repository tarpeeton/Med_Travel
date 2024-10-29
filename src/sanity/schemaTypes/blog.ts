import { defineType } from 'sanity';

export default defineType({
  name: 'blog',
  type: 'document',
  title: 'Блог',
  fields: [
    {
      name: 'sections',
      type: 'array',
      title: 'Секции',
      of: [
        {
          type: 'object',
          title: 'Секция',
          fields: [
            {
              name: 'title',
              type: 'object',
              title: 'Заголовок',
              fields: [
                { name: 'ru', type: 'string', title: 'Заголовок на русском' },
                { name: 'uz', type: 'string', title: 'Заголовок на узбекском' },
                { name: 'en', type: 'string', title: 'Заголовок на английском' },
              ],
              validation: (Rule) => Rule.required().error('Заголовок обязателен'),
            },
            {
              name: 'image',
              type: 'image',
              title: 'Изображение',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required().error('Изображение обязательно'),
            },
            {
              name: 'description',
              type: 'object',
              title: 'Описание',
              fields: [
                { name: 'ru', type: 'text', title: 'Описание на русском' },
                { name: 'uz', type: 'text', title: 'Описание на узбекском' },
                { name: 'en', type: 'text', title: 'Описание на английском' },
              ],
              validation: (Rule) => Rule.required().error('Описание обязательно'),
            },
          ],
        },
      ],
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Категории',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
      validation: (Rule) => Rule.required().error('Необходимо выбрать хотя бы одну категорию'),
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
