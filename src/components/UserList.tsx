import { useEffect } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { appDispatch, RootState } from "../redux/store";
import { fetchUsers } from "../redux/userSlice";

const UserList = () => {
  const user = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch<appDispatch>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      {user.loading ? (
        <Alert variant="info">Loading...</Alert>
      ) : (
        <>
          <h1 className="mb-4 display-5">I fetch this data from an API</h1>
          {user.users.map((user) => (
            <div key={user.id}>
              <h2>{user.name}</h2>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default UserList;
