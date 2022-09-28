import Head from "next/head";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addPost,
  removePost,
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
  selectPostById,
} from "../features/posts/postsSlice";
import { getUsers, selectAllUsers } from "../features/users/usersSlice";

export default function Home() {
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);
  const users = useSelector(selectAllUsers);
  const singlePost = useSelector((state) => selectPostById(state, 1));
  const dispatch = useDispatch();

  console.log("posts", posts);
  console.log("users", users);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-3xl">
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            {/* <p>{users[0].name}</p> */}
          </div>
        ))}
        <div>
          <button onClick={() => dispatch(addPost(2, "Hello", "content", 2))}>
            AddPost
          </button>
          <button onClick={() => dispatch(removePost(2))}>RemovePost</button>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}