
export default {
    name: 'banner',
    type: 'document',
    title: 'Баннер',
    fields: [
      {
        name: 'title',
        type: 'object',
        title: 'Заголовок',
        fields: [
          { name: 'uz', type: 'string', title: 'Узбекский' },
          { name: 'ru', type: 'string', title: 'Русский' },
          { name: 'en', type: 'string', title: 'Английский' },
        ],
      },
      {
        name: 'backgroundImage',
        type: 'image',
        title: 'Фоновая фотография',
        options: {
          hotspot: true,
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'buttonLink',
        type: 'url',
        title: 'Ссылка для кнопки',
      },
      {
        name: 'buttonText',
        type: 'object',
        title: 'Текст для кнопки',
        fields: [
          { name: 'uz', type: 'string', title: 'Узбекский' },
          { name: 'ru', type: 'string', title: 'Русский' },
          { name: 'en', type: 'string', title: 'Английский' },
        ],
      },
    ],
  };
  