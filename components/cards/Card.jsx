import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Cards from "./Cards";
import { useGetPostsQuery } from "../../features/posts/postsSlice";
import Spinner from "../../shared/Spinner";

const Card = (props) => {
  const [postData, setPostData] = useState(null);
  const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

  const {
    isSuccess,
    error,
    isLoading,
    isError,
    data: posts,
  } = useGetPostsQuery();

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + 10;
    const data = posts?.ids.slice(itemOffset, endOffset);
    console.log("posts", data);

    setPostData(data);
    setPageCount(Math.ceil(posts?.ids.length / 10));
  }, [itemOffset, posts]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 10) % posts.ids.length;

    setItemOffset(newOffset);
  };

    return (
    
        
        <section>
        { isLoading? <div><Spinner/></div> : (
        
          
            <div className="sm:grid  gap-y-5 gap-x-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  p-14 ">
            {postData &&
                postData.map((postId) => (
                    <Cards post={posts.entities[postId]} key={postId} />
                    ))}
                    </div>
            ) }
      <div className="flex">
        <ReactPaginate
          className="flex items-center justify-center gap-4 w-full"
          breakLabel="..."
          nextLabel=">>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel="<<"
          renderOnZeroPageCount={null}
        />
      </div>
    </section>
  );
};

export default Card;
