import {FC} from 'react';
import BlogWithSlug from './Blog'
import Share from './Share'
import Comments from './Comments'
import OtherBlogs from './Other'


const MainBlogWithSlug: FC = () => {
  return (
    <div className='mx-[16px] mdl:mx-[20px] 2xl:mx-[200px]'>
        <BlogWithSlug/>
        <Share />
        <Comments />
        <OtherBlogs />
    </div>
  );
};

export default MainBlogWithSlug;