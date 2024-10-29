import { defineType } from 'sanity';

export default defineType({
  name: 'comment',
  type: 'document',
  title: 'Комментарий',
  fields: [
    {
      name: 'text',
      type: 'text',
      title: 'Комментарий',
      validation: (Rule) => Rule.required().min(1).error('Комментарий не может быть пустым'),
    },
    {
      name: 'blog',
      type: 'reference',
      title: 'Блог',
      to: [{ type: 'blog' }],
      validation: (Rule) => Rule.required().error('Комментарий должен быть привязан к блогу'),
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
