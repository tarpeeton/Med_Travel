import MainHotels from '@/components/Hotels/Main'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Страны и Отели - Найдите Ваш Идеальный Страны и Отели',
    description: 'Ищете идеальный отель ? Мы предлагаем широкий выбор гостиниц с различными удобствами и доступными ценами. Найдите свой идеальный отель уже сегодня!',
    keywords: 'отели , гостиницы Узбекистан, бронирование отелей, комфортные номера, недорогие отели, роскошные отели, отзывы о гостиницах',
}

export default function Index() {
    return (
        <div>
            <MainHotels />
        </div>
    )
}
