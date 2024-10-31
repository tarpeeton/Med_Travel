// schemas/hotels.js
import { defineType, defineField } from 'sanity';

// Define interfaces for location and service name objects with multilingual fields
interface TranslatedField {
  ru?: string;
  uz?: string;
  en?: string;
}

export default defineType({
  name: 'hotels',
  type: 'document',
  title: 'Отели',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Название отеля',
      validation: Rule => Rule.required().error('Название отеля обязательно')
    }),
    defineField({
      name: 'location',
      type: 'object',
      title: 'Локация',
      fields: [
        { name: 'ru', type: 'string', title: 'Локация на русском' },
        { name: 'uz', type: 'string', title: 'Локация на узбекском' },
        { name: 'en', type: 'string', title: 'Локация на английском' },
      ],
      validation: Rule => Rule.custom((location: TranslatedField = {}) => {
        if (location.ru || location.uz || location.en) {
          return true;
        }
        return 'Локация обязательна хотя бы на одном языке';
      })
    }),
    defineField({
      name: 'service',
      type: 'array',
      title: 'Услуги',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'object',
              title: 'Название услуги',
              fields: [
                { name: 'ru', type: 'string', title: 'Название на русском' },
                { name: 'uz', type: 'string', title: 'Название на узбекском' },
                { name: 'en', type: 'string', title: 'Название на английском' },
              ],
              validation: Rule => Rule.custom((name: TranslatedField = {}) => {
                if (name.ru || name.uz || name.en) {
                  return true;
                }
                return 'Название услуги обязательно хотя бы на одном языке';
              })
            },
            {
              name: 'icon',
              type: 'image',
              title: 'Иконка услуги',
              options: { hotspot: true },
              validation: Rule => Rule.required().error('Иконка услуги обязательна')
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Цена',
      validation: Rule => Rule.required().error('Цена обязательна')
    }),
    defineField({
      name: 'availableFrom',
      type: 'date',
      title: 'Доступно с',
      options: { dateFormat: 'YYYY-MM-DD' },
      validation: Rule => Rule.required().error('Дата начала доступности обязательна')
    }),
    defineField({
      name: 'availableTo',
      type: 'date',
      title: 'Доступно до',
      options: { dateFormat: 'YYYY-MM-DD' },
      validation: Rule => Rule.required().error('Дата окончания доступности обязательна')
    }),
    defineField({
      name: 'photo',
      type: 'image',
      title: 'Фото',
      options: { hotspot: true },
      validation: Rule => Rule.required().error('Фото обязательно')
    }),
    defineField({
      name: 'adultsSize',
      type: 'number',
      title: 'Количество взрослых',
      initialValue: 2,
      validation: Rule => Rule.min(1).error('Количество взрослых должно быть положительным числом')
    }),
    defineField({
      name: 'childrenSize',
      type: 'number',
      title: 'Количество детей',
      initialValue: 2,
      validation: Rule => Rule.min(0).error('Количество детей должно быть положительным числом')
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Рейтинг',
      validation: Rule => Rule.min(0).max(5).error('Рейтинг должен быть между 0 и 5')
    })
  ]
});
