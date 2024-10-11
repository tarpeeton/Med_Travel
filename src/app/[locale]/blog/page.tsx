import MainBlog from '@/components/Blog/Main'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Блоги',
  description: 'Самые свежие новости',
  keywords: 'Med Travel, Последние новости',
}


export default function Index() {
  return (
    <div>
      <MainBlog />
    </div>
  )
}
