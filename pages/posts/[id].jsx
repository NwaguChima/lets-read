import React from "react";
import { useSelector } from "react-redux";
import { selectPostById, deletePost } from "../../features/posts/postsSlice";
import { useRouter } from "next/router";
import PostDetails from "../../components/postdetails/PostDetails";


const PostDetail = () => {
  // get param from url
  const router = useRouter();
  const { id } = router.query;
  const singlePost = useSelector((state) => selectPostById(state, Number(id)));

  console.log("id", id);
  console.log("singlePost", singlePost);

  return (
    <div>
  <PostDetails />
    </div>
  )
};

export default PostDetail;
