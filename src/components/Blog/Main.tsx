"use client"
import { FC, useState, useEffect } from 'react'

import Latests from './Latests'
import Articles from './Articles'
import FormBlog from './Form'
import Blogs from './Blogs'
import { AllBlogs, AllBlogType } from '@/lib/api'
import useLocale from '@/hooks/useLocale'
import { IBlog } from '@/interface/Blog'
import { client } from "@/sanity/lib/client"


export interface IBlogTypes {
  _id: string
  title: {
    ru: string
    uz: string
    en: string
  }
}








const MainBlog: FC = () => {
  const locale = useLocale()
  const [typeID, setTypeID] = useState('all')
  const [types, setTypes] = useState<IBlogTypes[] | []>([])
  const [blogs, setBlogs] = useState<IBlog[] | []>([])
  const [search, setSearch] = useState('')


  console.log(blogs, "blogs")
  useEffect(() => {
    const FetchAllTypes = async () => {
      try {
        const res = await client.fetch(
          `*[_type == "category"]{
          title , _id
          }`
        )
        setTypes(res)
      } catch (error) {

      }
    }
    FetchAllTypes()
  }, [])


  useEffect(() => {
    const FetchAllBlogs = async () => {
      try {
        const res = await client.fetch(
          `*[_type == "blog"]
          { _id,
categories,
sections,
createdAt}
          `
        )
        setBlogs(res)
      } catch (error) {

      }
    }
    FetchAllBlogs()
  }, [locale])



  return (
    <div className='mx-[16px] mdl:mx-[20px] 2xl:mx-[200px]'>
      {/* <Latests blogs={blogs.slice(0, 3)} /> */}
      <Articles setTypeID={setTypeID} types={types} setSearch={setSearch} search={search} typeID={typeID} />
      <Blogs typeID={typeID} blogs={blogs} search={search} />
      <FormBlog />
    </div>
  )
}

export default MainBlog;

