import "../styles/globals.css";
import { store } from "../app/store";
import { Provider } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";
import { extendedApiSlice } from "../features/posts/postsSlice";

// this is done to ensure users are gotten before the page is rendered
store.dispatch(extendedApiSlice.endpoints.getPosts.initiate());
// console.log("xxx", extendedApiSlice);
store.dispatch(fetchUsers());

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
