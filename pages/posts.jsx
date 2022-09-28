import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  addPost,
  removePost,
  selectAllPosts,
  getPostsStatus,
  getPostsError,
} from "../features/posts/postsSlice";

export default function Home() {
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  console.log("posts", posts);

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
            <Link href={`/posts/${post.id}`}>
              <h1>{post.title}</h1>
            </Link>
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
