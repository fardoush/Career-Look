import React from 'react';

const BlogPost = (props) => {
    const {question, answer} = props.post;

    return (
        <>
            <div tabIndex={0}
                 className="collapse collapse-arrow border border-purple-300 bg-base-100 rounded-box w-3/4 mb-5">
                <div className="collapse-title text-xl font-medium">
                    {question}
                </div>
                <div className="collapse-content">
                    <p>{answer}</p>
                </div>
            </div>

        </>
    );
};

export default BlogPost;