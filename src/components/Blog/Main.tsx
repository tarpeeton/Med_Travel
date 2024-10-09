import {FC} from 'react';

import Latests from './Latests';
import Articles from './Articles';
import FormBlog from './Form';
import Blogs from './Blogs'


const MainBlog: FC = () => {
  return (
    <div className='mx-[16px] mdl:mx-[20px] 2xl:mx-[200px]'>
        <Latests/>
        <Articles/>
        <Blogs/>
        <FormBlog/>
    </div>
  );
};

export default MainBlog;

