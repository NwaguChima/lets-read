import React from 'react'

const AddComments = () => {
  return (
      <div class="max-w-full-lg rounded-lg shadow-md shadow-blue-600/1000 mt-19">
          <form action="" class="w-full p-4">
              <div class="mb-10">
                  {/* <label for="comment" class="text-lg text-gray-600">Add a comment</label> */}
                  <textarea
                      class="w-full h-24 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                      name="comment"
                      placeholder=""></textarea>
              </div>
              <div className='flex justify-end gap-5'>
                  <button class="px-3 py-2 text-sm text-orange-100 bg-orange-600 rounded hover:bg-orange-500 ">
                      Comment
                  </button>
                  <button
                      class="px-3 py-2 text-sm text-orange-600 border border-orange-500 rounded hover:bg-orange-100 ">
                      Cancel
                  </button>
              </div>
          </form>
      </div>
  )
}

export default AddComments;
