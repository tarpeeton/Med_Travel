import Contacts from '@/components/Main/Contacts'
import Form from '@/components/Form/Form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Контакты',
    description: 'Свяжитесь с нами для получения дополнительной информации',
    keywords: 'Контакты, Связаться, Med Travel, Медицинский туризм',
  }
  

export default function Index() {
  return (
    <div className='mx-[16px] mdl:mx-[20px] 2xl:mx-[200px] flex flex-col gap-[120px] mdl:gap-[180px] 2xl:gap-[200px]  mt-[20px] mdl:mt-[40px] 2xl:mt-[60px]'>
      <Contacts />
      <Form />
    </div>
  )
}
