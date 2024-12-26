import { defineType } from 'sanity'

export default defineType({
  name: 'sanatoriums',
  title: 'Санатории',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Название санатория',
      type: 'object',
      fields: [
        { name: 'ru', type: 'string', title: 'Русский' },
        { name: 'uz', type: 'string', title: 'Узбекский' },
        { name: 'en', type: 'string', title: 'Английский' }
      ],
      preview: {
        select: {
          title: 'name.ru',
        },
        prepare(selection: Record<string, any>) {
          return {
            title: `${selection.title || 'Без названия'} )`
          }
        }
      }
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name.en',
        maxLength: 100,
      }
    },
    {
      name: 'description',
      title: 'Описание',
      type: 'object',
      fields: [
        { name: 'ru', type: 'text', title: 'Русский' },
        { name: 'uz', type: 'text', title: 'Узбекский' },
        { name: 'en', type: 'text', title: 'Английский' }
      ]
    },
    {
      name: 'bannerImage',
      title: 'Баннер',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'homeImage',
      title: 'Главная фотография',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'gallereya',
      title: 'Галерея',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    },
    
   
    {
      name: 'rating',
      title: 'Рейтинг',
      type: 'number',
      description: 'Рейтинг санатория в диапазоне от 0 до 5 (например, 4.9)',
      validation: (Rule) => Rule.min(0).max(5)
    },
    {
      name: 'packages',
      title: 'Пакеты лечения',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'object',
              title: 'Название пакета',
              fields: [
                { name: 'ru', type: 'string', title: 'Русский' },
                { name: 'uz', type: 'string', title: 'Узбекский' },
                { name: 'en', type: 'string', title: 'Английский' }
              ]
            },
            {
              name: 'description',
              type: 'object',
              title: 'Описание',
              fields: [
                { name: 'ru', type: 'text', title: 'Русский' },
                { name: 'uz', type: 'text', title: 'Узбекский' },
                { name: 'en', type: 'text', title: 'Английский' }
              ]
            },
            {
              name: 'duration',
              type: 'number',
              title: 'Длительность (дней)',
              validation: (Rule) => Rule.required().min(1).error('Длительность должна быть не менее 1 дня')
            },
            {
              name: 'price',
              type: 'string',
              title: 'Цена'
            },
            {
              name: 'features',
              type: 'array',
              title: 'Включено / Не включено',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'serviceName',
                      type: 'string',
                      title: 'Название услуги'
                    },
                    {
                      name: 'isIncluded',
                      type: 'boolean',
                      title: 'Включено',
                      initialValue: false
                    }
                  ],
                  preview: {
                    select: {
                      title: 'serviceName',
                      isIncluded: 'isIncluded'
                    },
                    prepare(selection: Record<string, any>) {
                      return {
                        title: selection.title,
                        media: selection.isIncluded ? 'yes' : 'no'
                      }
                    }
                  }
                }
              ]
            }
          ],
       
        }
      ]
    },
    {
      name: 'stayProgram',
      title: 'Программа пребывания',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'programImage',
              type: 'image',
              title: 'Изображение',
              options: {
                hotspot: true
              }
            },
            {
              name: 'title',
              type: 'object',
              title: 'Название',
              fields: [
                { name: 'ru', type: 'string', title: 'Русский' },
                { name: 'uz', type: 'string', title: 'Узбекский' },
                { name: 'en', type: 'string', title: 'Английский' }
              ]
            }
          ],
         
        }
      ]
    },
    {
      name: 'roomTypes',
      title: 'Типы номеров и проживание',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'images',
              type: 'array',
              title: 'Фотографии номера',
              of: [
                {
                  type: 'image',
                  options: {
                    hotspot: true
                  }
                }
              ],
              validation: (Rule) => Rule.required().min(1).error('Добавьте хотя бы одно фото номера')
            },
            {
              name: 'title',
              type: 'object',
              title: 'Название типа номера',
              fields: [
                { name: 'ru', type: 'string', title: 'Русский' },
                { name: 'uz', type: 'string', title: 'Узбекский' },
                { name: 'en', type: 'string', title: 'Английский' }
              ],
              validation: (Rule) => Rule.required().error('Название номера обязательно')
            },
            {
              name: 'description',
              type: 'object',
              title: 'Описание номера',
              fields: [
                { name: 'ru', type: 'text', title: 'Русский' },
                { name: 'uz', type: 'text', title: 'Узбекский' },
                { name: 'en', type: 'text', title: 'Английский' }
              ],
              validation: (Rule) => Rule.required().error('Описание номера обязательно')
            }
          ],
          
        }
      ]
    },
    {
      name: 'address',
      title: 'Адрес',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'object',
          fields: [
            { name: 'ru', type: 'string', title: 'Русский' },
            { name: 'uz', type: 'string', title: 'Узбекский' },
            { name: 'en', type: 'string', title: 'Английский' }
          ]
        },
        {
          name: 'coords',
          type: 'array',
          title: 'Координаты',
          of: [{ type: 'string' }]
        }
      ]
    },
    {
      name: 'telegram',
      title: 'Telegram',
      type: 'url'
    },
    {
      name: 'phone',
      title: 'Телефон',
      type: 'string'
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'url'
    },
   
    {
      name: 'mainServiceImage',
      title: 'Изображение для услуг и процедур',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule) => Rule.required().error('Изображение для услуг обязательно')
    },
    {
      name: 'mainServices',
      title: 'Основные услуги',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'title',
            type: 'object',
            title: 'Название услуги',
            fields: [
              { name: 'ru', type: 'string', title: 'Русский' },
              { name: 'uz', type: 'string', title: 'Узбекский' },
              { name: 'en', type: 'string', title: 'Английский' }
            ],
            validation: (Rule) => Rule.required().error('Название услуги обязательно')
          }
        ],
      
      }]
    },
    {
      name: 'additionalServices',
      title: 'Дополнительные услуги',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'title',
            type: 'object',
            title: 'Название услуги',
            fields: [
              { name: 'ru', type: 'string', title: 'Русский' },
              { name: 'uz', type: 'string', title: 'Узбекский' },
              { name: 'en', type: 'string', title: 'Английский' }
            ],
            validation: (Rule) => Rule.required().error('Название услуги обязательно')
          }
        ],
      
      }]
    },
    {
      name: 'specializations',
      title: 'Специализации и оздоровительные программы',
      type: 'object',
      fields: [
        {
          name: 'images',
          type: 'array',
          title: 'Изображения (максимум 3)',
          of: [
            {
              type: 'image',
              options: { hotspot: true }
            }
          ],
          validation: (Rule) => Rule.max(3).error('Максимум 3 изображения')
        },
        {
          name: 'programs',
          type: 'array',
          title: 'Программы',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'icon',
                  type: 'image',
                  title: 'Иконка',
                  validation: (Rule) => Rule.required().error('Иконка обязательна')
                },
                {
                  name: 'title',
                  type: 'object',
                  title: 'Название программы',
                  fields: [
                    { name: 'ru', type: 'string', title: 'Русский' },
                    { name: 'uz', type: 'string', title: 'Узбекский' },
                    { name: 'en', type: 'string', title: 'Английский' }
                  ],
                  validation: (Rule) => Rule.required().error('Название программы обязательно')
                }
              ],
             
            }
          ]
        }
      ]
    },
  ],
})
