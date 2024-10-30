import { defineType } from 'sanity';

// Schema для услуги
export default defineType({
  name: 'service',
  title: 'Услуга-Клиники',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Название услуги',
      type: 'object',
      fields: [
        { name: 'ru', title: 'Название на русском', type: 'string' },
        { name: 'en', title: 'Название на английском', type: 'string' },
        { name: 'uz', title: 'Название на узбекском', type: 'string' },
      ],
      description: 'Название услуги на трех языках',
      validation: (Rule) => Rule.required(),
    },
  ],
});