import { useSelector } from "react-redux";
import { selectPostById } from "../features/posts/postsSlice";

const PostCard = ({ post }) => {
  // const post = useSelector((state) => selectPostById(state, post));
  console.log("post***", post);

  return <p>zzzfxxxzx</p>;
};

export default PostCard;
