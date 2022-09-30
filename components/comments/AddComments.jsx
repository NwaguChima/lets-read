import React from "react";
import { useAddCommentMutation } from "../../features/posts/postsSlice";

const AddComments = ({ postId }) => {
  const [comment, setComment] = React.useState("");
  //   addComment
  const [addComment] = useAddCommentMutation();

  async function handleSubmit(e) {
    e.preventDefault();
    addComment({ postId, comment });
    setComment("");
  }

  return (
    <div className="max-w-full-lg rounded-lg shadow-md shadow-blue-600/1000 mt-19">
      <form action="" className="w-full p-4">
        <div className="mb-10">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full h-24 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
            name="comment"
            placeholder=""
          ></textarea>
        </div>
        <div className="flex justify-end gap-5">
          <button
            onClick={(e) => handleSubmit(e)}
            className="px-3 py-2 text-sm text-orange-100 bg-orange-600 rounded hover:bg-orange-500 "
          >
            Comment
          </button>
          <button
            className="px-3 py-2 text-sm text-orange-600 border border-orange-500 rounded hover:bg-orange-100 "
            onClick={() => setComment("")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddComments;
