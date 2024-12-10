
export default {
  name: 'clinicks',
  title: 'Клиники',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Название клиники',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
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
      name: 'specionizedclicnick',
      title: 'Специализация клиники',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'icon',
            type: 'image',
            title: 'Иконка'
          },
          {
            name: 'name',
            type: 'object',
            title: 'Название',
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
          }
        ],
        preview: {
          select: {
            title: 'name.ru',
            media: 'icon'
          }
        }
      }]
    },
    {
      name: 'serviceForLecheniye',
      title: 'Услуги лечения',
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
            ]
          }
        ],
        preview: {
          select: {
            title: 'title.ru'
          },
          prepare(selection: { title: string }) {
            return {
              title: selection.title
            }
          }
        }
      }]
    },
    {
      name: 'doctors',
      title: 'Врачи',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'image',
            type: 'image',
            title: 'Фото доктора',
            options: {
              hotspot: true
            }
          },
          {
            name: 'name',
            type: 'object',
            title: 'ФИО',
            fields: [
              { name: 'ru', type: 'string', title: 'Русский' },
              { name: 'uz', type: 'string', title: 'Узбекский' },
              { name: 'en', type: 'string', title: 'Английский' }
            ]
          },
          {
            name: 'occupation',
            type: 'object',
            title: 'Специальность',
            fields: [
              { name: 'ru', type: 'string', title: 'Русский' },
              { name: 'uz', type: 'string', title: 'Узбекский' },
              { name: 'en', type: 'string', title: 'Английский' }
            ]
          },
          {
            name: 'description',
            type: 'object',
            title: 'О враче',
            fields: [
              { name: 'ru', type: 'text', title: 'Русский' },
              { name: 'uz', type: 'text', title: 'Узбекский' },
              { name: 'en', type: 'text', title: 'Английский' }
            ]
          },
          {
            name: 'stage',
            type: 'string',
            title: 'Стаж'
          }
        ],
        preview: {
          select: {
            title: 'name.ru',
            subtitle: 'occupation.ru',
            media: 'image'
          }
        }
      }]
    },
    {
      name: 'rating',
      title: 'Рейтинг',
      type: 'number',
      description: 'Рейтинг клиники в диапазоне от 0 до 5 (например, 4.9)',
    },
    {
      name: 'pakets',
      title: 'Пакеты услуг',
      type: 'array',
      of: [{
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
            name: 'price',
            type: 'string',
            title: 'Цена'
          },
          {
            name: 'yesOrNo',
            type: 'array',
            title: 'Включено / Не включено',
            of: [{
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
                prepare(selection: { title: string; isIncluded: boolean }) {
                  return {
                    title: selection.title,
                    media: selection.isIncluded ? 'yes' : 'no'
                  }
                }
              }
            }]
          }
        ],
        preview: {
          select: {
            title: 'name.ru',
            price: 'price'
          },
          prepare(selection: { title: string; price: string }) {
            return {
              title: `${selection.title} - ${selection.price}`
            }
          }
        }
      }]
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
      name: 'instagram',
      title: 'Instagram',
      type: 'url'
    },
    {
      name: 'phone',
      title: 'Телефон',
      type: 'string'
    }
  ]
}