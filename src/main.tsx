// React
import React from "react";
import ReactDOM from "react-dom/client";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store";
// React Router Dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Components / Pages
import App from "./App";
import PostList from "./components/PostList";
import UserList from "./components/UserList";
import Layout from "./layout/Layout";
import ErrorPage from "./pages/error-page";
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import Post from "./components/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/users",
    element: (
      <Layout>
        <UserList />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/posts",
    element: (
      <Layout>
        <PostList />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/post/:id",
    element: (
      <Layout>
        <Post />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
