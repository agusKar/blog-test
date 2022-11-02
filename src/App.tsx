import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 className="display-5 text-center">I made this "blog" just to improve my knowledge about React + TS + Redux + Redux Thunks</h1>
      <hr />
      <h5 className="display-6 text-center mb-5">I didn't pay attention to the design.</h5>

      <ul>
        <li><Link to="/users" className="lead">Users</Link></li>
        <li><Link to="/posts"  className="lead">Posts</Link></li>
      </ul>
      
    </div>
  );
}

export default App;
