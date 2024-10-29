export default {
    name: 'history',
    title: 'История',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Заголовок',
        type: 'object',
        fields: [
          { 
            name: 'ru',
            title: 'Русский заголовок',
            type: 'string'
          },
          { 
            name: 'uz',
            title: 'Узбекский заголовок',
            type: 'string'
          },
          { 
            name: 'en',
            title: 'Английский заголовок',
            type: 'string'
          }
        ],
        options: {
          collapsible: true,
          collapsed: false,
        }
      },
      {
        name: 'media',
        title: 'Медиа (Изображение или Видео)',
        type: 'array',
        of: [
          { 
            type: 'image', 
            title: 'Изображение',
            options: { 
              hotspot: true 
            } 
          },
          { 
            type: 'file',
            title: 'Видео',
            options: { 
              accept: 'video/*' 
            } 
          }
        ],
        options: {
          layout: 'grid'
        }
      },
      {
        name: 'createdAt',
        title: 'Дата создания',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
        readOnly: true
      }
    ]
  };
  