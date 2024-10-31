import { defineType } from 'sanity';

export default defineType({
  name: 'sanatoriums',
  type: 'document',
  title: 'Санатории',
  fields: [
    {
      name: 'name',
      type: 'object',
      title: 'Название',
      fields: [
        { name: 'ru', type: 'string', title: 'Название на русском' },
        { name: 'uz', type: 'string', title: 'Название на узбекском' },
        { name: 'en', type: 'string', title: 'Название на английском' },
      ],
      validation: (Rule) => Rule.required().error('Название санатория обязательно'),
    },
    {
      name: 'fromAddress',
      type: 'object',
      title: 'Адрес от',
      fields: [
        { name: 'ru', type: 'string', title: 'Адрес на русском' },
        { name: 'uz', type: 'string', title: 'Адрес на узбекском' },
        { name: 'en', type: 'string', title: 'Адрес на английском' },
      ],
      validation: (Rule) => Rule.required().error('Адрес отправления обязателен'),
    },
    {
      name: 'toAddress',
      type: 'object',
      title: 'Адрес до',
      fields: [
        { name: 'ru', type: 'string', title: 'Адрес на русском' },
        { name: 'uz', type: 'string', title: 'Адрес на узбекском' },
        { name: 'en', type: 'string', title: 'Адрес на английском' },
      ],
      validation: (Rule) => Rule.required().error('Адрес назначения обязателен'),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Цена',
      validation: (Rule) => Rule.required().min(0).error('Цена обязательна и должна быть положительным числом'),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Рейтинг',
      validation: (Rule) =>
        Rule.required()
          .min(0)
          .max(5)
          .error('Рейтинг обязателен и должен быть от 0 до 5'),
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Основное изображение',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Основное изображение обязательно'),
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Категории',
      of: [{ type: 'reference', to: [{ type: 'sanatoriumcategory' }] }],
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
