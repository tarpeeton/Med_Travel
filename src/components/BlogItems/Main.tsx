import {FC} from 'react';
import BlogWithSlug from './Blog'
import Share from './Share'
import Comments from './Comments'
import SimilarNews from './Similar'


const MainBlogWithSlug: FC = () => {
  return (
    <div className='mx-[16px] mdl:mx-[20px] 2xl:mx-[200px]'>
        <BlogWithSlug/>
        <Share />
        <Comments />
        <SimilarNews />
    </div>
  );
};

export default MainBlogWithSlug;