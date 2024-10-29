"use client"
import { FC, useState, useEffect } from 'react'
import Title from '../ui/title'
import { FaUserAlt } from "react-icons/fa"
import { client } from "@/sanity/lib/client"
  




interface IComment {
  blogID: string
}


interface ICommentData {
  _id: string;
  text: string;
  createdAt: string;
}





const Comments: FC<IComment> = ({ blogID }) => {
  const [comments, setComments] = useState<ICommentData[]>([]);
  const [newComment, setNewComment] = useState<string>(''); // State for new comment input


  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
  }




  useEffect(() => {
    const fetchComments = async (blogId: string) => {
      const query = `*[_type == "comment" && blog._ref == $blogId]{
        _id,
        text,
        createdAt
      }`;
      const params = { blogId };
      try {
        const res = await client.fetch(query, params);
        setComments(res); // Set the fetched comments
      } catch (error) {
        console.error('Failed to fetch comments:', error);
      }
    };

    fetchComments(blogID); // Use the actual `blogID` prop
  }, [blogID]);

  const createCommentInSanity = async () => {
    if (!newComment.trim()) return; // Prevent empty comments
    try {
      const response = await client.create({
        _type: 'comment',
        text: newComment,
        blog: { _type: 'reference', _ref: blogID },
        createdAt: new Date().toISOString(),
      });

      // Append the new comment to the list and clear the input
      setComments((prev) => [...prev, response]);
      setNewComment(''); // Clear the input
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };

  return (
    <div className='mt-[120px]'>
      <div className='flex flex-col'>
        <Title  text={{ru: 'Комментарии' , uz: "" , en: ""}} />
        <div className='flex flex-col mt-[20px] mdl:mt-[30px] 2xl:mt-[40px]'>
          <textarea value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder='Ваш комментарий' className='py-[16px] px-[20px] border border-borderColor outline-none rounded-[10px] mdl:h-[200px] 2xl:h-[220px]' />
          <button onClick={createCommentInSanity} className='greenButton p-[16px] w-[80%] font-bold mt-[12px] mdl:mt-[20px] mdl:w-[25%] 2xl:w-[15%]'>
            Отправить
          </button>
        </div>
        {comments && Array.isArray(comments) && comments.length > 0 && (
          <div className='mt-[50px] mdl:mt-[70px] 2xl:mt-[100px] flex flex-col pb-[30px] mdl:pb-[40px]'>
            <div className='flex flex-col '>
              {comments?.map((com) => (
                <div key={com._id} className=' flex flex-col pb-[30px] mdl:pb-[40px]  border-b border-borderColor mt-[40px]' >
                  <div className='flex flex-row'>
                    <div className='w-[45px] mdl:w-[50px] mdl:h-[50px]  flex justify-center items-center h-[45px] bg-[#D1F0ED] rounded-full text-center'>
                      <FaUserAlt className='text-green100 flex items-center justify-center' />
                    </div>
                    <div className='flex flex-col ml-[12px]'>
                      <p className='text-[16px] mdl:text-[20px] font-semibold text-titleDark font-raleway'>Rustam</p>
                      <p className='text-[14px] mdl:text-[16px] font-medium  text-[#A7A7A7] font-raleway'>
                        {formatDate(com.createdAt)}
                      </p>
                    </div>
                  </div>
                  <div className='mt-[20px] mdl:mt-[20px]'>
                    <p className='text-[15px] mdl:text-[18px] font-raleway font-medium text-titleDark'>
                      {com.text}
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
