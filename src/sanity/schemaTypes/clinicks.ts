import { defineType } from 'sanity';


export default defineType({
    name: 'clinic',
    title: 'Клиники',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Название клиники',
        type: 'string',
        description: 'Название клиники на одном языке',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'address',
        title: 'Адрес',
        type: 'object',
        fields: [
          { name: 'ru', title: 'Адрес на русском', type: 'string' },
          { name: 'en', title: 'Адрес на английском', type: 'string' },
          { name: 'uz', title: 'Адрес на узбекском', type: 'string' },
        ],
        description: 'Адрес клиники на трех языках',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'services',
        title: 'Услуги',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'service' }] }],
        description: 'Выберите соответствующие услуги для клиники',
      },
    ],
  });