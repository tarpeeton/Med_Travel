import {FC} from 'react';

import Latests from './Latests';
import Articles from './Articles';
import FormBlog from './Form';


const MainBlog: FC = () => {
  return (
    <div>
        <Latests/>
        <Articles/>
        <FormBlog/>
    </div>
  );
};

export default MainBlog;

