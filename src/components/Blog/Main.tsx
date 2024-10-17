"use client"
import { FC, useState, useEffect } from 'react'

import Latests from './Latests'
import Articles from './Articles'
import FormBlog from './Form'
import Blogs from './Blogs'
import { AllBlogType } from '@/lib/api'
import useLocale from '@/hooks/useLocale'


interface ITypes {
  id: number,
  name: string
  orderNum: 1,
  active: null | boolean
}

const MainBlog: FC = () => {
  const locale = useLocale()
  const [typeID, setTypeID] = useState(1)
  const [types, setTypes] = useState<ITypes[]>([])

  useEffect(() => {
    const FetchAllTypes = async () => {
      try {
        const res = await AllBlogType(locale)
      } catch (error) {

      }
    }
  })




  return (
    <div className='mx-[16px] mdl:mx-[20px] 2xl:mx-[200px]'>
      <Latests />
      <Articles />
      <Blogs />
      <FormBlog />
    </div>
  )
}

export default MainBlog;

