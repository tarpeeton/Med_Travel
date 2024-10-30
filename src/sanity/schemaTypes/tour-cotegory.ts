// schemas/torscotegory.js
import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'torscotegory',
    type: 'document',
    title: 'Категория-Туров',
    fields: [
        defineField({
            name: 'name',
            type: 'object',
            title: 'Название',
            fields: [
                { name: 'ru', type: 'string', title: 'Название на русском' },
                { name: 'uz', type: 'string', title: 'Название на узбекском' },
                { name: 'en', type: 'string', title: 'Название на английском' },
            ],
            validation: Rule => Rule.required().custom(name => {
                if (name && (name.ru || name.uz || name.en)) {
                    return true;
                }
                return 'Название обязательно хотя бы на одном языке';
            })
        }),
    ],
});
