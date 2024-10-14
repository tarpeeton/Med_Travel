import MainHotels from '@/components/Hotels/Main'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Гостиницы Узбекистана - Найдите Ваш Идеальный Отель',
    description: 'Ищете идеальный отель в Узбекистане? Мы предлагаем широкий выбор гостиниц с различными удобствами и доступными ценами. Найдите свой идеальный отель уже сегодня!',
    keywords: 'отели Узбекистана, гостиницы Узбекистан, бронирование отелей, комфортные номера, недорогие отели, роскошные отели, отзывы о гостиницах',
    viewport: 'width=device-width, initial-scale=1.0',
}

export default function Index() {
    return (
        <div>
            <MainHotels />
        </div>
    )
}
