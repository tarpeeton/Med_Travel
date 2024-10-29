"use client"
import { FC, useState, useEffect } from 'react'
import BlogWithSlug from './Blog'
import Share from './Share'
import Comments from './Comments'
import OtherBlogs from './Other'
import { AllBlogs } from '@/lib/api'
import useLocale from '@/hooks/useLocale'
import { IBlog } from '@/interface/Blog'
import { client } from "@/sanity/lib/client"



const MainBlogWithSlug: FC = () => {
  const locale = useLocale()
  const [blogID, setBlogID] = useState<string>('')

  const [allBlogs, setAllBlogs] = useState<IBlog[] | []>([])



  useEffect(() => {
    const FetchAllBlogs = async () => {
      try {
         const res = await client.fetch(
          `*[_type == "blog"]
          { _id,categories,sections,createdAt}
          `
        )
        setAllBlogs(res)
      } catch (error) {

      }
    }
    FetchAllBlogs()
  }, [locale])
  const similarNews = allBlogs ? allBlogs.slice(0, 4) : []
  const otherNews = allBlogs ? allBlogs.slice(4, 7) : []


  
  return (
    <div className='mx-[16px] mdl:mx-[20px] 2xl:mx-[200px]'>
      <BlogWithSlug setBlogID={setBlogID} allBlogs={similarNews} />
      <Share />
      <Comments blogID={blogID} />
      <OtherBlogs otherBlogs={otherNews} />
    </div>
  )
}

export default MainBlogWithSlug