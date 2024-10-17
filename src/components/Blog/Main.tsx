"use client"
import { FC, useState, useEffect } from 'react'

import Latests from './Latests'
import Articles from './Articles'
import FormBlog from './Form'
import Blogs from './Blogs'
import { AllBlogs, AllBlogType } from '@/lib/api'
import useLocale from '@/hooks/useLocale'


export interface IBlogTypes {
  id: number,
  name: string
  orderNum: 1,
  active: null | boolean
}
export interface IBlog {
  id: number; // Blog postining identifikatori
  slug: string; // Blog postining URL qismi
  option: {
      id: number; // Variantning identifikatori
      title: string; // Oddiy string: maqolaning sarlavhasi
      description: string; // Oddiy string: maqolaning ta'rifi
      photo: {
          id: number; // Rasmaning identifikatori
          url: string; // Rasm URL manzili
      };
      orderNum: number | null; // Tashqi ko'rinishdagi tartib raqami (bo'sh bo'lishi mumkin)
  }[];
  type: {
      id: number; // Turining identifikatori
      name: string; // Oddiy string: tur nomi
      orderNum: number; // Turi bo'yicha tartib raqami
      active: boolean | null; // Faollik holati (bo'sh bo'lishi mumkin)
  };
  orderNum: number; // Blog postining tartib raqami
  main: boolean; // Asosiy maqola belgilash
  active: boolean; // Faol maqola belgilash
}



const MainBlog: FC = () => {
  const locale = useLocale()
  const [typeID, setTypeID] = useState(1)
  const [types, setTypes] = useState<IBlogTypes[]>([])
  const [blogs , setBlogs] = useState<IBlog[]>([])
  let ArticlesBlogs = blogs.slice(0 , 3)





  useEffect(() => {
    const FetchAllTypes = async () => {
      try {
        const res = await AllBlogType(locale)
        setTypes(res.data)
      } catch (error) {

      }
    }
    FetchAllTypes()
  })


  useEffect(() => {
    const FetchAllBlogs = async () => {
      try {
        const res = await AllBlogs(locale)
        setBlogs(res.data)
      } catch (error) {
        
      }
    }
    FetchAllBlogs()
  } , [locale])



  return (
    <div className='mx-[16px] mdl:mx-[20px] 2xl:mx-[200px]'>
      <Latests blogs={ArticlesBlogs} />
      <Articles setTypeID={setTypeID} types={types} />
      <Blogs />
      <FormBlog />
    </div>
  )
}

export default MainBlog;

