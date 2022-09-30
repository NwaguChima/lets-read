import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { data } from "../../data";
import { useGetPostsQuery } from "../../features/posts/postsSlice";

const Card = (props) => {
  const [postData, setPostData] = useState(null);
  const {
    isSuccess,
    error,
    isLoading,
    isError,
    data: posts,
  } = useGetPostsQuery();

  useEffect(() => {
    setPostData(posts);
  }, [posts]);

  return (
    <>
      {/* <h1 className='m-8'>Recent Posts</h1> */}
      <div className="sm:grid gap-y-5 gap-x-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  p-14">
        {/* {postData &&
          postData?.ids.map((postId) => (
            <Cards post={postData.entities[postId]} key={postId} />
          ))} */}

        {data.map((post) => (
          <Cards post={post} key={post.id} />
        ))}
      </div>
    </>
  );
};

export default Card;
