import { defineType } from 'sanity';
import type { SanityDocument } from 'sanity';

interface BlogSection {
  title?: {
    ru?: string;
    uz?: string;
    en?: string;
  };
}

interface BlogDocument extends SanityDocument {
  sections?: BlogSection[];
}

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
        source: (doc: BlogDocument) => doc.sections?.[0]?.title?.en || '', // Explicitly typed doc
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with dashes
            .replace(/[^\w\-]+/g, '') // Remove non-word characters
            .replace(/\-\-+/g, '-') // Collapse multiple dashes
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
      name: 'createdAt',
      type: 'datetime',
      title: 'Дата создания',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    },
  ],
});
