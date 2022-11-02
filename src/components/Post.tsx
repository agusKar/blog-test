import { useEffect } from "react";
import { Alert, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPost, fetchPostImage } from "../redux/postSlice";
import { appDispatch, RootState } from "../redux/store";

const Post = () => {
  const { id } = useParams();
  const postState = useSelector((state: RootState) => state.post);
  const { post } = postState;
  const dispatch = useDispatch<appDispatch>();
  useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(fetchPost(id));
    dispatch(fetchPostImage());
  }, []);
  return (
    <>
      {postState.loading ? (
        <Alert variant="info">Loading</Alert>
      ) : postState.error ? (
        <Alert variant="danger">{postState.error}</Alert>
      ) : (
        <Row className="justify-content-md-center text-center">
          <Col>
            <h1 className="mb-5 display-6">
              I fetch this data from 2 differents API
            </h1>
            <Card className="m-auto" style={{"maxWidth":"50%"}}>
              <Card.Img variant="top" src={post?.image?.file} />
              <Card.Body>
                <Card.Title>{post?.title}</Card.Title>
                <Card.Text>{post?.body}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Post;
