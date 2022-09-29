// import "../styles/globals.css";
import "../styles/globals.css"
import { store } from "../app/store";
import { Provider } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";
import { fetchPosts } from "../features/posts/postsSlice";
import Layout from "../components/layout/Layout.jsx"

// this is done to ensure users are gotten before the page is rendered
store.dispatch(fetchPosts());
store.dispatch(fetchUsers());

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
