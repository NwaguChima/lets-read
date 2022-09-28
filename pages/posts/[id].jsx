import React from "react";
import { useSelector } from "react-redux";
import { selectPostById } from "../../features/posts/postsSlice";
import { useRouter } from "next/router";

const PostDetail = () => {
  // get param from url
  const router = useRouter();
  const { id } = router.query;
  const singlePost = useSelector((state) => selectPostById(state, Number(id)));

  console.log("id", id);
  console.log("singlePost", singlePost);

  return <div>Hello details.....</div>;
};

export default PostDetail;
