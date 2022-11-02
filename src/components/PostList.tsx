import { useEffect } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../redux/postSlice";
import { appDispatch, RootState } from "../redux/store";

const PostList = () => {
  const postState = useSelector((state: RootState) => state.post);
  const dispatch = useDispatch<appDispatch>();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      {postState.loading ? (
        <Alert variant="info">Loading...</Alert>
      ) : (
        <>
          <h1 className="mb-4 display-5">I fetch this data from an API</h1>

          {postState.posts.map((post) => (
            <div key={post.id}>
              <img src={post.image?.file} alt="" />
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <Link to={`/post/${post.id}`} className="btn btn-info">
                See more
              </Link>
              <hr />
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default PostList;
