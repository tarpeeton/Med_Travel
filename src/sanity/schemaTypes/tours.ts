// schemas/tour.js
import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'tour',
    type: 'document',
    title: 'Туры',
    fields: [
        defineField({
            name: 'mainPhoto',
            type: 'image',
            title: 'Основное фото',
            options: { hotspot: true },
            validation: Rule => Rule.required().error('Основное фото обязательно')
        }),
        defineField({
            name: 'gallery',
            type: 'array',
            title: 'Галерея',
            of: [{ type: 'image' }],
            options: { layout: 'grid' }
        }),
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
        defineField({
            name: 'category',
            type: 'reference',
            title: 'Категория',
            to: [{ type: 'torscotegory' }],
            validation: Rule => Rule.required().error('Категория обязательна')
        }),
        defineField({
            name: 'price',
            type: 'string',
            title: 'Цена',
            validation: Rule => Rule.required().error('Цена обязательна')
        }),
        defineField({
            name: 'fromAddress',
            type: 'object',
            title: 'Адрес отправления',
            fields: [
                { name: 'ru', type: 'string', title: 'Адрес на русском' },
                { name: 'uz', type: 'string', title: 'Адрес на узбекском' },
                { name: 'en', type: 'string', title: 'Адрес на английском' },
            ],
            validation: Rule => Rule.custom(fromAddress => {
                if (fromAddress && (fromAddress.ru || fromAddress.uz || fromAddress.en)) {
                    return true;
                }
                return 'Адрес отправления обязателен хотя бы на одном языке';
            })
        }),
        defineField({
            name: 'toAddress',
            type: 'object',
            title: 'Адрес назначения',
            fields: [
                { name: 'ru', type: 'string', title: 'Адрес на русском' },
                { name: 'uz', type: 'string', title: 'Адрес на узбекском' },
                { name: 'en', type: 'string', title: 'Адрес на английском' },
            ],
            validation: Rule => Rule.custom(toAddress => {
                if (toAddress && (toAddress.ru || toAddress.uz || toAddress.en)) {
                    return true;
                }
                return 'Адрес назначения обязателен хотя бы на одном языке';
            })
        }),
        defineField({
            name: 'fromDate',
            type: 'date',
            title: 'Дата отправления',
            options: { dateFormat: 'YYYY-MM-DD' },
            validation: Rule => Rule.required().error('Дата отправления обязательна')
        }),
        defineField({
            name: 'toDate',
            type: 'date',
            title: 'Дата возвращения',
            options: { dateFormat: 'YYYY-MM-DD' },
            validation: Rule => Rule.required().error('Дата возвращения обязательна')
        }),
        defineField({
            name: 'adultSize',
            type: 'number',
            title: 'Количество взрослых',
            validation: Rule => Rule.min(0).error('Количество взрослых должно быть положительным числом')
        }),
        defineField({
            name: 'childrenSize',
            type: 'number',
            title: 'Количество детей',
            validation: Rule => Rule.min(0).error('Количество детей должно быть положительным числом')
        }),
    ],
});
