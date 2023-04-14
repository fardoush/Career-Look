import React, { useEffect, useState } from 'react';
import BlogPost from './BlogPost';

const Blog = () => {

    const [post,setPost] = useState([]);

    useEffect(() => {
        fetch("answer.json")
          .then((res) => res.json())
          .then((data) => setPost(data));
      }, []);
    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className='blog-wrapper w-3/4   '>

{
        post.map(post => 
        <BlogPost
        key={post.id}
        post = {post}>

        </BlogPost>
      )
        
        }
        </div>
        </div>
        
    );
};

export default Blog;