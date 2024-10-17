"use client"
import { FC, useState, useEffect } from 'react'
import Title from '../ui/title'
import { FaUserAlt } from "react-icons/fa"
import { GetCommentWithID, CreateCommentWithID } from '@/lib/api'
import { useParams } from 'next/navigation'





interface IComment {
  blogID: number
}
interface ICommenData {
  id: number,
  comment: string,
  blogId: string,
  createdAt: string
}








const Comments: FC<IComment> = ({ blogID }) => {
  const { slug } = useParams()
  const [comment, setComment] = useState('')
  const [data, setData] = useState<ICommenData[] | []>([])

  useEffect(() => {
    const fetchCommentData = async () => {
      try {
        const res = await GetCommentWithID(blogID)
        setData(res.data)
      } catch (error) {
        console.warn(error)
      }
    }
    fetchCommentData()
  }, [slug, blogID]) // Adding blogID as a dependency to fetch comments when blogID changes

  const createComment = async () => {
    try {
      const response = await CreateCommentWithID(blogID, comment)
      setComment('') // Reset comment input after successful creation
      setData((prevData) => prevData ? [...prevData, response] : [response]) // Append the new comment to the list
    } catch (error) {
      console.error("Error creating comment:", error)
    }
  }

  return (
    <div className='mt-[120px]'>
      <div className='flex flex-col'>
        <Title title='Комментарии' />
        <div className='flex flex-col mt-[20px] mdl:mt-[30px] 2xl:mt-[40px]'>
          <textarea onChange={(e) => setComment(e.target.value)} placeholder='Ваш комментарий' className='py-[16px] px-[20px] border border-borderColor outline-none rounded-[10px] mdl:h-[200px] 2xl:h-[220px]' />
          <button onClick={createComment} className='greenButton p-[16px] w-[80%] font-bold mt-[12px] mdl:mt-[20px] mdl:w-[25%] 2xl:w-[15%]'>
            Отправить
          </button>
        </div>


        {data && Array.isArray(data) && data.length > 0 && (
          <div className='mt-[50px] mdl:mt-[70px] 2xl:mt-[100px] flex flex-col pb-[30px] mdl:pb-[40px]  border-b border-borderColor'>
            <div className='flex flex-col'>
              {data?.map((com) => (
                <div key={com.id}>
                  <div className='flex flex-row'>
                    <div className='w-[45px] mdl:w-[50px] mdl:h-[50px]  flex justify-center items-center h-[45px] bg-[#D1F0ED] rounded-full text-center'>
                      <FaUserAlt className='text-green100 flex items-center justify-center' />
                    </div>


                    <div className='flex flex-col ml-[12px]'>
                      <p className='text-[16px] mdl:text-[20px] font-semibold text-titleDark font-raleway'>Rustam</p>
                      <p className='text-[14px] mdl:text-[16px] font-medium  text-[#A7A7A7] font-raleway'>
                        {com.createdAt}
                      </p>
                    </div>
                  </div>
                  <div className='mt-[20px] mdl:mt-[20px]'>
                    <p className='text-[15px] mdl:text-[18px] font-raleway font-medium text-titleDark'>
                      {com.comment}
                    </p>
                  </div>
                </div>

              ))}

            </div>
          </div>
        )}



      </div>
    </div>
  )
}

export default Comments