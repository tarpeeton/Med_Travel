import { defineType } from 'sanity';

// Schema for Sanatorium Categories
export default defineType({
  name: 'sanatoriumcategory',
  type: 'document',
  title: 'Категория Санатория',
  fields: [
    {
      name: 'title',
      type: 'object',
      title: 'Категория Санатория',
      fields: [
        { name: 'ru', type: 'string', title: 'Название на русском' },
        { name: 'uz', type: 'string', title: 'Название на узбекском' },
        { name: 'en', type: 'string', title: 'Название на английском' },
      ],
      validation: (Rule) => Rule.required().error('Название категории обязательно'),
    },
  ],
});

