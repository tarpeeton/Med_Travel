"use client"
import { FC, useState, useEffect } from 'react'

import Latests from './Latests'
import Articles from './Articles'
import FormBlog from './Form'
import Blogs from './Blogs'
import { AllBlogs, AllBlogType } from '@/lib/api'
import useLocale from '@/hooks/useLocale'
import { IBlog } from '@/interface/Blog'

export interface IBlogTypes {
  id: number,
  name: string
  orderNum: 1,
  active: null | boolean
}



const MainBlog: FC = () => {
  const locale = useLocale()
  const [typeID, setTypeID] = useState(11212)
  const [types, setTypes] = useState<IBlogTypes[]>([])
  const [blogs, setBlogs] = useState<IBlog[]>([])
  const [search, setSearch] = useState('')




  useEffect(() => {
    const FetchAllTypes = async () => {
      try {
        const res = await AllBlogType(locale)
        setTypes(res.data)
      } catch (error) {

      }
    }
    FetchAllTypes()
  }, [])


  useEffect(() => {
    const FetchAllBlogs = async () => {
      try {
        const res = await AllBlogs(locale)
        setBlogs(res.data)
      } catch (error) {

      }
    }
    FetchAllBlogs()
  }, [locale])



  return (
    <div className='mx-[16px] mdl:mx-[20px] 2xl:mx-[200px]'>
      <Latests blogs={blogs.slice(0, 3)} />
      <Articles setTypeID={setTypeID} types={types} setSearch={setSearch} search={search} typeID={typeID} />
      <Blogs typeID={typeID} blogs={blogs.slice(3)} search={search} />
      <FormBlog />
    </div>
  )
}

export default MainBlog;

