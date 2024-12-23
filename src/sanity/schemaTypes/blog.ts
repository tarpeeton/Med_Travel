import { defineType } from 'sanity';

export default defineType({
  name: 'blog',
  type: 'document',
  title: 'Блог',
  
  fields: [
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'sections.0.title.en',
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .trim(),
      },
      validation: (Rule) => Rule.required().error('Slug обязателен'),
    },
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
            },
            {
              name: 'description',
              type: 'object',
              title: 'Описание',
              fields: [
                {
                  name: 'ru',
                  type: 'blockContent',
                  title: 'Описание на русском',
                },
                {
                  name: 'uz',
                  type: 'blockContent',
                  title: 'Описание на узбекском',
                },
                {
                  name: 'en',
                  type: 'blockContent',
                  title: 'Описание на английском',
                },
              ],
              validation: (Rule) => Rule.required().error('Описание обязательно'),
            },
          ],
        },
      ],
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

// Дополнительно добавляем blockContent.js для форматируемого текста
export const blockContent = {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Heading 1', value: 'h1' },
        { title: 'Heading 2', value: 'h2' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              { name: 'href', type: 'url', title: 'URL' },
            ],
          },
        ],
      },
    },
    {
      type: 'image',
      options: { hotspot: true },
    },
  ],
};
