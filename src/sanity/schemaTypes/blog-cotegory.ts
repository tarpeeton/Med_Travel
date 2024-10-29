export default {
    name: 'category',
    type: 'document',
    title: 'Категория',
    fields: [
      {
        name: 'title',
        type: 'object',
        title: 'Название категории',
        fields: [
          { name: 'ru', type: 'string', title: 'Название на русском' },
          { name: 'uz', type: 'string', title: 'Название на узбекском' },
          { name: 'en', type: 'string', title: 'Название на английском' },
        ],
        validation: (Rule: unknown) => (Rule as any).required().error('Название категории обязательно'),
      },
    ],
  };
  